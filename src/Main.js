import React from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export default class Main extends React.Component {

     fetchWatchedTitles=(code)=>{
        (async()=>{
            let url = 'https://api.annict.com/graphql'
            let query = gql`{
                searchWorks(seasons: ["2018-autumn"], orderBy: { field: WATCHERS_COUNT, direction: DESC }, first: 3) {
                    edges {
                      node {
                        annictId
                        title
                        watchersCount
                      }
                    }
                  }
              }`
//APIを叩いてデータを取得
/*
seasons: ["2018-autumn"], orderBy: { field: WATCHERS_COUNT, direction: DESC }, first: 3)
2018年秋アニメの視聴者数上位3つを表示する
annictId:固有ID
title:タイトル
watchersCount:視聴者数
*/

const client = new ApolloClient({
                uri: url,
                request: operation => {
                    operation.setContext({
                        headers: {
                            authorization: 'Bearer ' + 'D-SC47E1iBUaz-eJKvts2XKaLoBAA9uQWFfU2Y7h8sI'
                        }
                    })
                }
})
//トークンで認証

let response = await client.query({
                query
            })
            if(response !== null){
                console.log(response);
            }
        })().catch(
            error=>{
              console.log(error);
            }
        )
    }
//問題なくデータを取得できた場合は値をコンソールに反映

  render() {
    return (
        <div className="App">
            <input
          type="button"
          value="アニメデータを検索"
          onClick={() => this.fetchWatchedTitles()}
        />
        </div> 
    );
  }
}