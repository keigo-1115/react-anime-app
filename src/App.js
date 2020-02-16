import React from 'react';
import './App.css';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Reducer';
import firebase from 'firebase';
import Account from './Account';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBC42HNxCZe7JjmXSWOvl8Hpx1YqrOnI3Y",
      authDomain: "anime-app-6e5dd.firebaseapp.com",
      databaseURL: "https://anime-app-6e5dd.firebaseio.com",
      projectId: "anime-app-6e5dd",
      storageBucket: "anime-app-6e5dd.appspot.com",
      messagingSenderId: "144372671321"
    });
}

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,composeEnhancers(applyMiddleware()));
    return (
      <Provider store={store}>
          <Account/>
      </Provider> 
    );
  }
}
