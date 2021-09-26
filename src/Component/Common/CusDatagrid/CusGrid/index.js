import React, { memo,Children} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {GridDefaultSetting} from '../';

const CusDataGrid=memo((props)=>{
    const {children,onDataStateChange,page,pageSize,filter,sort ,idField="id",...otherProps}=props

    const setDataState=(v,f)=>{
      onDataStateChange && onDataStateChange({
         page
        ,pageSize
        ,filter
        ,sort
        ,[`${f}`]:v
      })
    }

return <DataGrid 
        {...GridDefaultSetting } 
        {...otherProps} 
        onPageSizeChange={(x) => setDataState(x,"pageSize") }
        onPageChange={(x) => setDataState(x,"page")}
        onFilterModelChange={x=>setDataState(x,"filter")}
        onSortModelChange={ (x) =>setDataState(x,"sort")}
        getRowId={(r)=>r[idField]}
        page={page}
        pageSize={pageSize}
        filter={filter}
        sort ={sort}
        >
          {
                 Children.map(children, x=>x)
          }
        </DataGrid>
})
export default CusDataGrid;

