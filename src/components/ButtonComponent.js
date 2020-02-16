import React from 'react';
import Button from '@material-ui/core/Button';

export default class ButtonComponet extends React.Component{

render() {
    return (
        <div className="ButtonComponent_container">
        <Button style={{width: '14.5em',marginTop:'1em'}} variant="contained" color="primary" href="#contained-buttons">
            ログイン
        </Button>
        <div className="line"></div>
        <Button style={{width: '14.5em',marginTop:'1em'}} variant="contained" color="primary" href="#contained-buttons">
            新規会員登録
         </Button>
         </div>
           );
         }

}
