import React, {memo} from 'react'
import { Button as Btn} from '@material-ui/core';


const variant='contained' ;//|'text' 'outlined' | 'contained';
const Button=memo((props)=>{
    const {title,design,...otherProps}=props
    return (
                <Btn title={title} variant={variant}  color={`primary`} {...otherProps}>{title}</Btn>
    )
})
export default Button;
