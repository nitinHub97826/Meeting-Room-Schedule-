import React from 'react';
import {rowBtnFilter} from '../../Button';
// import DateFnsUtils from "@date-io/date-fns";


export const CalcColumns=(gridSetting,cellActionProps)=>{
  const {columns,cellActions}=gridSetting;
    if( !columns || columns.length==0)
    console.error("CalcColumns error: wrong parameter")

 let _col=   columns.filter(f=>(!f.hide)).map(x=>{
        const {resizable,...other}=x
       

      return {
        ...other,
        renderCell:((params) => {
          switch(params.colDef.type){
            case "date":
              return formatDate(params.value)
              default:
                return params.value
          }
        }
        )
      };
    })
    if(cellActions.length!==0)
    {
   let actionProp={};
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
              
              return React.cloneElement( rowBtnFilter({name :x,props:actionProp}),{key:x})
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
   
    return {
      _columns:_col
    };
}

export const TopGridCalcColumns=(gridSettings,cellActionProps)=>{
    
  let keys=Object.keys(gridSettings);
  
  if(keys.length==0)
    throw "Grid settings are empty"; 

  return {
    ...gridSettings[keys[0]],
    ...CalcColumns(gridSettings[keys[0]],cellActionProps)
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
