import React,{memo} from 'react';
import { IconBtn ,fontSize} from '.';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const EditRowBtn=memo((props)=>{
  
  
 return(       
        <IconBtn
            aria-label="edit"
            title="EDIT"
            {...props}
           
            >
        <EditIcon fontSize={fontSize} />
        </IconBtn>
 )

})

export const DeleteRowBtn=memo((props)=>{
    
    return(       
        <IconBtn
        aria-label="delete"
        title="DELETE"
        {...props}
      >
        <DeleteIcon fontSize={fontSize} />
      </IconBtn>
    )
   
})

export const CancelRowBtn=memo((props)=>{
    
  return(       
      <IconBtn
      aria-label="cancel"
      title="CANCEL"
      {...props}
    >
      <CancelIcon fontSize={fontSize} />
    </IconBtn>
  )
 
})


export const MenuIconBtn=memo((props)=>{
    
  return(       
      <IconBtn
      aria-label="menu"
      title="MENU"
      {...props}
    >
      <MenuIcon fontSize={fontSize} />
    </IconBtn>
  )
 
})


export const rowBtnFilter=({name,props})=>{
  const {dataItem,onClick,...otherProps}=props
 const onPress=(p)=>{
    onClick && onClick({...p,dataItem:dataItem})
  }
  

switch (name.toLowerCase()){
  case "edit":
    return <EditRowBtn {...otherProps} onClick={onPress}/>
  case "delete":
    return <DeleteRowBtn {...otherProps} onClick={onPress}/>
  case "undelete":
    return <DeleteRowBtn {...otherProps} onClick={onPress}/>
  case "cancel":
     return <CancelRowBtn {...otherProps} onClick={onPress}/>
    default :
    return null;
}
}
