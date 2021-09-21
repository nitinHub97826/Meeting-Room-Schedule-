import React ,{Component} from 'react'
import { Card, CardContent } from '@material-ui/core';
import CustDatePicker from '../Common/DatePicker'
import SelectBox from '../Common/SelectBox'
import TextBox from '../Common/TextBox'
import Button from '../Common/Button';
import { ShowGrid } from '../Common/CusDatagrid/ShowGrid';

class Jobs extends Component{
    constructor(props) {
        super(props);
      
        this.state={
          
        }
        }

componentDidMount=()=>{

 
 
}
        

    render(){
       
    
        return(
           
            <Card>  
              <CardContent>
       <ShowGrid {...this.props} />
        </CardContent>
      </Card>
        )
    }
}

export default Jobs