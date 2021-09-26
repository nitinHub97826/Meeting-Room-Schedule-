import { bindActionCreators } from 'redux';
import {createStore} from 'redux';
import * as actionsCreater from './actionsCreater'
import {rootReducer} from './reducer'
import {middleWare} from './middleWare'




export const mapStateToProps=(state, ownProps = {})=>{
    return {
      appState:state
    }
  }
  
export  const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
      actions:{
        reducer:bindActionCreators({...actionsCreater},dispatch)
      }
    }
}

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
  //  localStorage.setItem('appState', serialState);
  } catch(err) {
      console.log(err);
  }
};
export const loadState = () => {
  try {
    const serialState = null;//localStorage.getItem('appState');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};
const store= createStore(rootReducer,middleWare);
store.subscribe(() => {
  saveState(store.getState());
});
export {store};
