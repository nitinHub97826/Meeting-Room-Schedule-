import React, {memo,Children} from 'react'
import { Button as Btn,IconButton} from '@mui/material';



const variant='contained' ;//|'text' 'outlined' | 'contained';
const fontSize="small";

const Button=memo((props)=>{
    const {title,design,...otherProps}=props
    return (
                <Btn title={title} variant={variant}  color={`primary`} {...otherProps}>{title}</Btn>
    )
})

const  IconBtn=memo((props)=>{
const {children,...otherProps}=props
  return (      
        <IconButton
        color="inherit"
        size={fontSize}
        {...otherProps}
      >
         {
            Children.map(children, x=>x)
         }
         
      </IconButton>
  )
})


export {fontSize,Button,IconBtn}