import React from 'react';
import { Divider, ListItemText } from '.';


export const ListHeader = ({ headers, row, idField }) => {

    const renderItem = (y, indexy) => <React.Fragment key={row[idField] + "_" + y.field}>
        <ListItemText
            className={`${(indexy % 2 == 0) ? 'odd' : 'even'}`}

            primary={y.headerName}
            secondary={row[y.field]}
        />
        
    </React.Fragment>
    return headers.map(renderItem);
}