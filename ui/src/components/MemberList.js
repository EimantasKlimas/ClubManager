import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const MemberList = ({memberList}) => {
  return(

    <List>
      {memberList.map((member) =>
        <ListItem key={member.name}>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary={member.name.concat(" " + member.surname)}/>
          <ListItemIcon >
            <RemoveCircleIcon/>
          </ListItemIcon>
        </ListItem>
      )}
    </List>
  );
}

export {MemberList};
