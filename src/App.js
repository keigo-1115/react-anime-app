import React from 'react';
import './App.css';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/Reducer';
import firebase from 'firebase';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './components/ThemeChange';
import Main from './screens/Main';
import Thunk from 'redux-thunk';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    });
}

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,composeEnhancers(applyMiddleware(Thunk)));
    return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <Main/>
      </Provider> 
    </MuiThemeProvider>
    );
  }
}
