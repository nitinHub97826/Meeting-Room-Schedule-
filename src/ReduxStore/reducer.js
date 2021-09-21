import  {actionType,loadState} from './index'
import {combineReducers} from 'redux';


const initialState={

    GridSetting:{

    },
    ...loadState
}

export const reducer=(state=initialState,action)=>{

        switch(action.type){
            case actionType.GET_GRID_SETTING:
                return {
                    ...state,
                    GridSetting:{
                        ...state.GridSetting,
                        ...action.payload.data
                    }
                }
         

            default:
                return {
                    ...state
                }


        }

}

export const rootReducer = combineReducers({
    reducer
});
   