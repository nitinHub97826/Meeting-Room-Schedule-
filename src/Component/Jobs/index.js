import React ,{Component,Fragment} from 'react'
import { Button, Card, CardContent } from '@mui/material';
import { ShowGrid } from '../Common/CusDatagrid/index';
import AddEdit from './AddEdit'

class Jobs extends Component{
    constructor(props) {
        super(props);
        this.state={
           
        }
        this.popupRef = React.createRef();
        }

     onEdit=(e)=>{
         this.popupRef.current.openPopup(e.dataItem.row);
     }
     onDelete=(e)=>{
      
       console.log('onDelete',e)
    }
        componentDidMount(){
            
        }
    
    render(){
       
    const {onEdit,onDelete,state,popupRef}=this
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
            <AddEdit {...this.props} ref={popupRef} />
            </Fragment>
        )
    }
}

export default Jobs