import React, {Component } from 'react';
import CusDataGrid from '../index.js';
import {GridDefaultSetting,TopGridCalcColumns} from '../';
import ApiCall from '../../ApiCall/index.js';


class ShowGrid extends Component{

  constructor(props){
    super(props)
    this.state={
      data:{data:[],total:0},
      dataState:{
        page:0,
        pageSize:GridDefaultSetting._pageSize,
        filter:null,
        sort:[],

      },
      columns:{
        _columns:[],
        _toolbar:null
      }
    }

    this.apiRef = React.createRef();
  }
  componentDidMount=()=>{
    const {currentMenu,actions,appState}=this.props
  
    const {name}=currentMenu
    const {GridSetting}=appState.reducer
    
    if((!(name in   GridSetting))){
      actions.reducer.GetGridSetting(currentMenu)
     }
     else{
     this.setColumns();
     }
  }

  setColumns=()=>{
    const {cellActionProps,toobarActionProps,appState,currentMenu}=this.props
    const {name}=currentMenu
    const {GridSetting}=appState.reducer
    if((!(name in   GridSetting))){
    return
    }
    let column=(TopGridCalcColumns({
      gridSettings:GridSetting[name],
      cellActionProps:cellActionProps,
      toobarActionProps:toobarActionProps
    })) 
 
    this.setState((s,p)=>({
      ...s
      ,columns:column
    }),()=>this.GetData())
  }

  componentDidUpdate(prevProps) {
    const {columns}=this.state
    if(columns && columns._columns.length==0){
      this.setColumns();
    }
  }

  GetData=()=>{
 const {currentMenu,apiCall}=   this.props
 const {columns,dataState}=this.state


  const {id}=currentMenu
    if(columns.gridId){
      apiCall.postCall({url:"Common/GetGridDataSource", payload:{menuid:id,gridid:columns.gridId, ...dataState}, onSuccess:(r)=>{
        this.setState((s,p)=>({
          ...s,
          data:r.data
        }))
      }})
  }
}
  setDataState=(ds)=>{
    this.setState((s,p)=>({
      ...s
      ,dataState:{
        ...ds
      }
    })
    ,this.GetData())
  }






  render(){
    const {setDataState,state,apiRef}=this
    const {data,dataState,columns}=state
    console.log("i render")
return(
    <div style={{ height: '90%', width: '100%' }}>
      <CusDataGrid 
      apiRef={apiRef}
      idField={columns.idField}
      rows={data.data} 
      rowCount={data.total}
      columns={columns._columns} 
      {...dataState}
      onDataStateChange={setDataState}
      components={{
        Toolbar:columns._toolbar,
      }}
      />
    </div>
)
}

}
const _ShowGrid= ApiCall(ShowGrid)
export {_ShowGrid  as ShowGrid};

ShowGrid.defaultProps = {
  cellActionProps: {},
  toobarActionProps:{}
};