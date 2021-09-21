import React ,{Component} from 'react'
import { Card, CardContent } from '@material-ui/core';
import { ShowGrid } from '../Common/CusDatagrid/ShowGrid';

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