import axios from 'axios';
import { apiUrl } from '../Constant';
import  {actionType} from './index'

export const GetGridSetting = (payload) => {
    const {id}=payload
    return{
        type: actionType.GET_GRID_SETTING,
        payload:axios.post(`${apiUrl}Common/GetGridSettings` ,{menuid:id} )
    };
};