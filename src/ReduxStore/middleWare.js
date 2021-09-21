import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const logger=(_store)=>{
    return (next)=>{
      return action=>{
    //    console.log("Middleware dispatch",action)
       const result= next(action);
      // console.log("Middleware next state",_store.getState())
       return result;
      }
    }
  }
  

  export const middleWare=applyMiddleware(thunk,promise,logger);

   