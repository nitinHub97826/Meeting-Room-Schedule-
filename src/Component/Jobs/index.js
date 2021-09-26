import React ,{Component,Fragment} from 'react'
import { Card, CardContent } from '@mui/material';
import { ShowGrid } from '../Common/CusDatagrid/index';
import AddEdit from './AddEdit'

class Jobs extends Component{
    constructor(props) {
        super(props);
        }
     onEdit=(e)=>{
        console.log('onEdit')
     }
     onDelete=(e)=>{
        
       console.log('onDelete',e)
    }
componentDidMount(){
    console.log("job",this.props)
}
    
    render(){
       
    const {onEdit,onDelete}=this
        return(
           <Fragment>
            <Card>  
                <CardContent>
                    <ShowGrid 
                    {...this.props}
                    cellActionProps={{
                        edit:{
                            onClick:onEdit
                        },
                        delete:{
                            onClick:onDelete
                        }
                    }}
                    />
                </CardContent>
            </Card>
            <AddEdit {...this.props}></AddEdit>
            </Fragment>
        )
    }
}

export default Jobs