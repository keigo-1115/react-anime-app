import React from 'react';
import firebase from 'firebase';
import "firebase/storage";
import TextField from "../components/TextField";
import Button from "../components/ButtonComponent";

export default class Account extends React.Component {

  _onPressOk = async () => {
    // const firestore = firebase.firestore();
    // firestore.settings(settings);
    console.log('発動');

    var user = firebase.auth();

    if (user != null) {
      // user.providerData.forEach(function(profile) {
        console.log(user);
        console.log('de-ta取れた');
        
      //   this.props.change_Email(String(profile.email));
      //   this.props.change_Name(String(profile.displayName));
      //   this.props.change_Snumber(String(this.state.snumber));
      // });
    }
}

  render() {
    return (
        <div className="Account">
          <img src="logo512.png" width="44px" height="44px" alt="logo"/>
            <TextField/>
            <Button/>
{/* 
            <input
          type="button"
          value="firebaseと接続"
          onClick={() => this._onPressOk()}
        /> */}
        </div>
    );
  }
}