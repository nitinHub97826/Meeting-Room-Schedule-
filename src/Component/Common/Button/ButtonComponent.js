import React, {memo,Children} from 'react'
import { Button as Btn,IconButton} from '@mui/material';



const variant='contained' ;//|'text' 'outlined' | 'contained';
const fontSize="small";

const Button=memo((props)=>{
    const {title,design,onClick,...otherProps}=props
    
const onPress=(p)=>{
   p.stopPropagation();
     onClick && onClick(p)
   }
   
    return (
                <Btn variant={variant}  color={`primary`} {...otherProps} title={title} onClick={onPress}>{title}</Btn>
    )
})

const  IconBtn=memo((props)=>{
 
      
const {children,onClick,...otherProps}=props

const onPress=(p)=>{
   p.stopPropagation();
     onClick && onClick(p)
   }

  return (      
        <IconButton
        color="inherit"
        size={fontSize}
        {...otherProps}
        onClick={onPress}
      >
         {
            Children.map(children, x=>x)
         }
         
      </IconButton>
  )
})


export {fontSize,Button,IconBtn}