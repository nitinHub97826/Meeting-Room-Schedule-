import React ,{Component,Fragment} from 'react'
import { Button, Card, CardContent } from '@mui/material';
import { GridMixList } from '../Common/MixComponents';
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
     onAdd=(e,a,d)=>{
        console.log(e,a,d)
        this.popupRef.current.openPopup();
     }
     onDelete=(e)=>{
      
       console.log('onDelete',e)
    }
        componentDidMount(){
            
        }
    
    render(){
    
    const {onAdd,onEdit,onDelete,popupRef}=this
        return(
           <Fragment>
         
      
     
      
             <Card>  
                <CardContent>
             <GridMixList
               {...this.props}
               cellActionProps={{
                   edit:{
                       onClick:onEdit
                   },
                   delete:{
                       onClick:onDelete
                   }
               }}
               toobarActionProps={{
                   add:{
                       onClick:onAdd
                   },
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