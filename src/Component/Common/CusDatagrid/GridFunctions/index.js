import { GridToolbarContainer } from '@mui/x-data-grid';
import moment from 'moment';
import React,{memo} from 'react';
import { dateFormat } from '../../../../Constant';
import {rowBtnFilter, toolbarBtnFilter} from '../../Button';


export const CalcColumns=({gridSettings,cellActionProps={},...otherProps})=>{
  const {columns,cellActions}=gridSettings;
    if( !columns || columns.length==0)
    console.error("CalcColumns error: wrong parameter")

    let actionProp={};
  
  let _col= columns.filter(f=>(!f.hide)).map(x=>{
        const {resizable,...other}=x
       
let val="";
      return {
        ...other,
        renderCell:((params) => {
          val=""
          switch(params.colDef.type){
            case "date":
              val= moment(new Date(params.value)).format(dateFormat);
              break;
            default:
                val=params.value;
                break;
          }
          return <span title={val}>{val}</span>;
        }
        )
      };
    })
    if(cellActions.length!==0)
    {
   
   _col=[
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (rc)=>{
        return (<div key={"action"}>
             {
             cellActions.map(x=>{
              actionProp={
                ...cellActionProps[x],
                dataItem:rc
              };
              
              return React.cloneElement(rowBtnFilter({name :x,props:actionProp}),{key:x})
             })
             }
              </div>
              )
      },
      sortable: false,
      width: 100,
      headerAlign: 'center',
      filterable: false,
      align: 'center',
      disableColumnMenu: true,
      disableReorder: true,
    }
    ,
    ..._col
  ]
    }

    let _toolbar =toolbarCalc({
                ...otherProps,
                gridSettings:gridSettings                
              })
   
    return {
      _columns:_col
      ,_toolbar:_toolbar
    };
}


export const toolbarCalc=({gridSettings,toobarActionProps,key})=>{
  const {toolbarActions}=gridSettings;
  let actionProp={};
  let _toolbar=null
  
  if(toolbarActions.length!==0)
  {
  actionProp={};
  _toolbar= ()=><GridToolbarContainer key={key}>
        {
        toolbarActions.map(x=>{
            actionProp={
              ...toobarActionProps[x]
            };
            return React.cloneElement(toolbarBtnFilter({name :x,props:actionProp}),{key:x})
           })
          }
           </GridToolbarContainer>
  }
  return _toolbar;
  } 

export const TopGridCalcColumns=({gridSettings,...otherProps})=>{
    
  let keys=Object.keys(gridSettings);
  
  if(keys.length==0)
    throw "Grid settings are empty"; 

  return {
    ...gridSettings[keys[0]],
    ...CalcColumns({
      key: keys[0],
      ...otherProps
      ,gridSettings:gridSettings[keys[0]]
    })
  } 
}

export const GridDefaultSetting={
    _pageSize:25,
    rowsPerPageOptions:[25, 50, 75, 100],
    pagination:true,
    disableColumnMenu:false,
    paginationMode:"server",
    filterMode:"server",
    sortingMode:"server"
}

export const formatDate=(date)=> {
  if (date !== undefined && date !== "" && date !== null) {
    var myDate = new Date(date);
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][myDate.getMonth()];
    var str =   month + " " +myDate.getDate() + ", "+myDate.getFullYear();
    return str;
  }
  return "";
}
