import React from 'react'
import Button from '../Component/Button'
import TextBox from '../Component/TextBox'
import CustDatePicker from '../Component/DatePicker'
import Upload from '../Component/Upload'
import { Card, CardActions, CardContent, CardHeader, Container, FormControl } from '@material-ui/core'
import { Fragment } from 'react'

const InterviewRecord =()=>{
    return(
       <div className="card-container">
           <form className="form">
             <Card>
               <CardHeader title="Interview Room"></CardHeader>
               </Card>
        <div className="row">
          <Card>
             
              <CardContent>
            
                <TextBox required={true} autoFocus={true} label="Company Name"/>
                <TextBox required={true} type="email" label="Company Email"/>
                <TextBox required={true} label="Company Phone"/>
                <TextBox required={true} label="Company Person"/>
              
               
                </CardContent>
                </Card> 


                <Card>
              <CardContent>
            {/* <CustDatePicker  label={"Contact Date"} ></CustDatePicker> */}
            <TextBox required={true} label={"Requirement Desciption"} />
            <TextBox label={"Assignment Title"}/>
            {/* <Upload ></Upload> */}
            <CardActions>
            <Button title="Submit" type="submit" design={"primary"}/>
            <Button title="Clear" type="reset" />
            </CardActions>
            
            </CardContent>
                </Card> 
       </div>
                </form>
           
        </div>
    )
}



export default InterviewRecord