
import * as React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText, ListItemButton, Collapse } from './index';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import { ListHeader } from './ListHeader';
import { ListChild } from './ListChild';



const FolderList = (props) => {
  const { children, data, headers, child, height, idField } = props
  const [open, setOpen] = useState(false);
  return (
    <List sx={{
      height: { height }, width: '100%', position: 'relative',
      overflow: 'auto', maxWidth: 360, bgcolor: 'background.paper'
    }} className="Folderlist" >
      {
        data.map(x => {
          return <React.Fragment key={x[idField]}>
           
            <ListItemButton onClick={() => {
              setOpen((open == x[idField] ? undefined : x[idField]))
            }}>

            <ListHeader headers={headers} row={x} idField={idField}/>
            
              {(open == x[idField]) ? <ExpandLess key={x[idField] + "_less"} /> : <ExpandMore key={x[idField] + "_more"} />}
            </ListItemButton>
            <Divider variant="inset" component="li" />
            <Collapse in={(open == x[idField])} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
               <ListChild  child={child} row={x} idField={idField} />
              </List>
            </Collapse>
          </React.Fragment>



        })

      }


    </List>
  );
}

export { FolderList }