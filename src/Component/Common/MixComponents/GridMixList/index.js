
    import React, {Component } from 'react';
    import CusDataGrid,{GridDefaultSetting,TopGridCalcColumns} from '../../CusDatagrid';
    import ApiCall from '../../ApiCall/index.js';
import { FolderList,ListItem,ListItemText } from '../../List';
    
    const height="90%";
    class GridMixList extends Component{
    
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
            _toolbar:null,
            listColumns:{
              headers:[],
              child:[]
            }
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
    return(
        <div style={{ height:{height}, width: '100%' }}>
     { false  &&   <CusDataGrid 
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
        }
          <FolderList height={height}
          data={data.data}
          {...columns.listColumns}
          idField={columns.idField}
          >
         
     
          </FolderList>
          </div>
    )
    }
    
    }
    const _GridMixList= ApiCall(GridMixList)
    export {_GridMixList  as GridMixList};
    
    GridMixList.defaultProps = {
      cellActionProps: {},
      toobarActionProps:{}
    };