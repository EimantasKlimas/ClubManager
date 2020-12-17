import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {MemberList} from "./MemberListCollapsible";

const ClubListItem = ({club, members}) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
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
