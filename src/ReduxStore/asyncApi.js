import {createStore,combineReducers,applyMiddleware} from 'redux';

import axios from 'axios';

const initialState={
    loading:false,
    data:[],
    error:''
}

const FETCH_USER="FETCH_USER";
const FETCH_PASS="FETCH_PASS";
const FETCH_FAIL="FETCH_FAIL";

const fetchUser=()=>{
    return{
        type:FETCH_USER
    }
}

const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUser())
        axios.get()
        .then(res=>{

        })
        .catch(error=>{

        })
    }
}


const fetchPass=(users)=>{
    return{
        type:FETCH_PASS,
        payload:users
    }
}

const fetchFail=(error)=>{
    return{
        type:FETCH_FAIL,
        payload:error
    }
}

const asynReducer=(state=initialState,action)=>{
    switch(action.type){
case  FETCH_USER:
    return{
        ...state,
        loading:true
    }
    case  FETCH_PASS:
        return{
            ...state,
            loading:false,
            users:action.payload,
            error:''
        }

        case  FETCH_FAIL:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
    
    }

}

const store= createStore(asynReducer,applyMiddleware(thunk));
  
export default store;