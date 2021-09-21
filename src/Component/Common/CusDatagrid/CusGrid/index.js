import React, { memo, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const CusDataGrid=memo((props)=>{
    const {...otherProps}=props
return <DataGrid {...otherProps} />
})
export default CusDataGrid;