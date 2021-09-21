// import DateFnsUtils from "@date-io/date-fns";


export const CalcColumns=(columns)=>{
    if(!columns || columns.length==0)
    console.error("CalcColumns error: wrong parameter")

 let _col=    columns.filter(f=>(!f.hide || f.field==='id')).map(x=>{
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
    //  columns.push(
    // {
    //   field: 'actions',
    //   headerName: 'Actions',
    //   renderCell: CellButton,
    //   sortable: false,
    //   width: 100,
    //   headerAlign: 'center',
    //   filterable: false,
    //   align: 'center',
    //   disableColumnMenu: true,
    //   disableReorder: true,
    // })
    return _col;
}
   
export const TopGridCalcColumns=(gridSettings)=>{
    
  let keys=Object.keys(gridSettings);
  
  if(keys.length==0)
    throw "Grid settings are empty"; 

  return {
    ...gridSettings[keys[0]],
    _columns:CalcColumns(gridSettings[keys[0]].columns)
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
