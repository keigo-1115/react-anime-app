import React, { Component } from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/Action";
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class SliderComponent extends Component {

constructor(props){
      super(props);
};

componentDidMount(){
    this.props.getPosts();
}

componentDidUpdate(prevProps){
  if(this.props.items !== prevProps.items){
  const {items} = this.props;
    if(Boolean(items[0])){ 
      for(let item in items){
       let items_id = items[item].id;
       let items_url = items[item].public_url;
       this.props.getPostsOgpImage(items_id,items_url);
      }
    };//itemsにデータが有る場合OGP画像を取得する関数を発動
  }
}

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ] 
    };

const {items_mix} = this.props;
let check = Boolean(items_mix[0]);//itemsにとってきたデータがあるか判定

return (
  <div className="slick_container">
  <Slider {...settings}>

{
check
?
  items_mix.map((item, index) =>

<div className="slider_wrapper" key={index}> 
        <div className="slider_container">
        <div className="slider__img"> 
            <img src={item.image} alt="logo"/>
            <div className="slidder__img_text"><a href={item.public_url}>{item.public_url}</a></div>
        </div>
    <div className="slider_anime_info">
        <div className="slider_anime_info_title">
            <p>{item.title}</p>
        </div>
        <div className="slider_anime_info_sharebtn">
            <IconButton color="primary" fontSize="small">
              <Icon>add_circle_outline</Icon>
            </IconButton>
        </div>
        {/* <div className="slider_anime_info_deletebtn">
            <IconButton color="primary" fontSize="small">
              <Icon>delete</Icon>
            </IconButton>
        </div> */}
    </div>   
</div>
</div>
): <div className="load"><p>読み込み中です</p></div>}

  </Slider>
  </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    items:state.api.items,
    items_mix:state.api.items_mix
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderComponent);
