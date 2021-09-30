import React,{memo} from 'react';
import { Button } from '.';

export const SubmitBtn=memo((props)=>{
 return(       
        <Button type={"submit"} title={"Submit"} {...props}></Button>
 )
})


export const CancelBtn=memo((props)=>{
    return(       
           <Button title={"Cancel"}  {...props}></Button>
    )
   })
   