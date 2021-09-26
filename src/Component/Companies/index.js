import React ,{Component} from 'react'
import { Card, CardContent } from '@mui/material';
import { ShowGrid } from '../Common/CusDatagrid/index';

class Companies extends Component{
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

export default Companies