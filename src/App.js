import React from 'react';
import './App.css';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Main from './Main';
import reducer from './Reducer';
import devToolsEnhancer from 'remote-redux-devtools';

export default class App extends React.Component {
  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,composeEnhancers(applyMiddleware()));
    return (
      <Provider store={store}>
          <Main/>
      </Provider> 
    );
  }
}
