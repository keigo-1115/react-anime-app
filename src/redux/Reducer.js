import {combineReducers} from 'redux';

    function counter(state = 0,action){
        switch(action.type){
          case 'INCREMENT' :
            return state + 1;
          case 'DECREMENT' :
            return state - 1;
          default :
            return state;
        }
      }
  
  
      function operationCounter(state = 0,action){
        return (action.type === 'INCREMENT' || action.type === 'DECREMENT')
              ? state + 1
              : state;
      }
     
      const reducer = combineReducers({
        count:counter,
        operationCount:operationCounter,
      });
  
      export default reducer;