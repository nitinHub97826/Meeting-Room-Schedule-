import React ,{Component} from 'react'
import { Card, CardContent } from '@mui/material';
 import { GridMixList } from '../Common/MixComponents';

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
          <GridMixList {...this.props} />
        </CardContent>
      </Card>
        )
    }
}

export default Companies