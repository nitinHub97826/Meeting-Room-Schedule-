import React, { useEffect, useState } from 'react';
import CusDataGrid from '../index.js';
import {  useSelector, useDispatch } from "react-redux";
import {CalcColumns,GridDefaultSetting,TopGridCalcColumns} from '../';
import ApiCall from '../../ApiCall/index.js';

export const ShowGrid=ApiCall((props)=>{
  const GridSetting = useSelector(state => state.reducer.GridSetting);
const {apiCall,currentMenu,actions}=props
const {name}=currentMenu
const [pageSize, setPageSize] = useState(GridDefaultSetting._pageSize);
const [filter, setFilter] = useState();
const [page, setPage] = useState(0);
const [sortModel, setSortModel] = React.useState([]);

const [data,setData]=useState({data:[],total:0});
const [columns,setColumns]=useState({
  _columns:[]
});


  
  useEffect(()=>{
     if((!(name in   GridSetting))){
      actions.reducer.GetGridSetting(currentMenu)
     }
     else{
      setColumns(TopGridCalcColumns(GridSetting[name])) 
     }
    },[GridSetting])

    useEffect(()=>{
      
      const {id}=currentMenu
    if(columns.gridId){
      apiCall.postCall({url:"Common/GetGridDataSource", payload:{menuid:id,gridid:columns.gridId, page:page,take:pageSize,fiter:filter,sort:sortModel}, onSuccess:(r)=>{
        setData(r.data)
      }})
    }
  
     
    },[pageSize,columns,page,filter,sortModel])
  
return(
    <div style={{ height: '90%', width: '100%' }}>
      <CusDataGrid 
      {...GridDefaultSetting }
      checkboxSelection
      rows={data.data} 
      rowCount={data.total}
      columns={columns._columns} 
      pageSize={pageSize}
      onPageSizeChange={(x) => setPageSize(x)}
      page={page}
      onPageChange={(x) => setPage(x)}
      onFilterModelChange={x=>setFilter(x)}
      sortModel={sortModel}
      onSortModelChange={ (x) =>setSortModel(x)}
      />
    </div>
)
})

