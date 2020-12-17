import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


const MemberList = ({open,members}) => {

  const memberText = (member) => {
    return member.name.concat(" ", member.surname)
  }

  return(
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {members.map((member) =>
            <ListItem key={member.id}>
              <ListItemText inset primary={memberText(member)}/>
            </ListItem>
          )
          }
        </List>
      </Collapse>
  )
}

export {MemberList};
