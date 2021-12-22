import * as React from 'react';
import { useState } from 'react';
import {List,ListItem,ListItemText,ListItemButton,Collapse} from './index';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const  FolderList=(props)=> {
  const{children,data,headers,child,height}=props
  const [open,setOpen]=useState(false);
  
    return (
      <List sx={{height:{height}, width: '100%',  position: 'relative',
      overflow: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
           {
                data.map(x=>{
              return  <React.Fragment key={x.id}>
               <ListItemButton  onClick={()=>setOpen(x.id)}>
                
                 {
                
                 headers.map(y=>{
                        return(
                          <ListItemText key={x.id+"_"+y.field} primary={y.headerName} secondary={x[y.field]}/>
                        )
                    })
                  }
                  {(open==x.id) ? <ExpandLess key={x.id+"_less"} /> : <ExpandMore key={x.id+"_more"}/>}
                  </ListItemButton>
                  <Collapse in={(open==x.id)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                 {  
                 child.map(y=>{
                      return(
                          <ListItemText key={x.id+"_"+y.field} primary={y.headerName} secondary={x[y.field]}/>
                      )
                  })
                }
                 </List>
                </Collapse>
                </React.Fragment>
                  
                
              
                })
              
            }
               
      
      </List>
    );
  }

  export {FolderList}
//   <ListItemButton onClick={handleClick}>

//   <ListItemText primary="Inbox" />
//   {open ? <ExpandLess /> : <ExpandMore />}
// </ListItemButton>
// <Collapse in={open} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//     <ListItemButton sx={{ pl: 4 }}>
//       <ListItemIcon>
//         <StarBorder />
//       </ListItemIcon>
//       <ListItemText primary="Starred" />
//     </ListItemButton>
//   </List>
// </Collapse>