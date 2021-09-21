import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

export const edit=(props)=>{
    
 return(       
        <IconButton
            color="inherit"
            size="small"
            aria-label="edit"
            {...props}
            >
        <EditIcon fontSize="small" />
        </IconButton>
 )

}
export const deleteBtn=(props)=>{
    
    return(       
        <IconButton
        color="inherit"
        size="small"
        aria-label="delete"
        {...props}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    )
   
   }
