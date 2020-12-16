import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {MemberList} from "./MemberListCollapsible";

const ClubListItem = ({club, members}) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const memberText = (member) => {
    return member.name.concat(" ", member.surname)
  }

  return(
    <div>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={club.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <MemberList members={members} open={open}/>
    </div>
  )
}

export {ClubListItem};
