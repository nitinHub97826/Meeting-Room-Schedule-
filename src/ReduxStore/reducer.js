import  {actionType,loadState} from './index'
import {combineReducers} from 'redux';


const initialState={

    GridSetting:{

    }
    ,DropDownDs:{
        COMPANYMASTER:{data:[],total:0}
        ,DESIGNATIONMASTER:{data:[],total:0}
        ,JOBSTATUMASTER:{data:[],total:0}
    }
    ,...loadState
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
         
                case actionType.GET_DROPDOWN_DS:
                    return {
                        ...state,
                        DropDownDs:{
                            ...state.DropDownDs,
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
   