import React, { useMemo } from 'react';
import { Divider, ListItemText } from '.';
import { ifNotNull, isNull } from '../../../Constant/Utils';


export const ListChild = React.memo(({ child, row, idField }) => {

    const renderItem = (y, indexy) => {
        return ifNotNull(row[y.field], <React.Fragment key={row[idField] + "_" + "child" + "_" + y.field}>
            <ListItemText
                primary={y.headerName}
                secondary={row[y.field]}
            />
            <Divider variant="inset" component="li" />
        </React.Fragment>
        )
    }

    return child.map(renderItem);
})
