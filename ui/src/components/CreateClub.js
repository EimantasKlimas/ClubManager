import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {VALUES} from "../constants/values";
import "../styles/CreateClub.css"

const CreateClub = () => {
  const [memberName, setName] = React.useState("");
  const [memberSurname, setSurname] = React.useState("");
  const [memberList, setMemberList] = React.useState([]);

  const handleChange = (event) => {
    switch (event.target.name.toUpperCase()) {
      case VALUES.MEMBERNAME:
        setName(event.target.value);
        break;
      case VALUES.MEMBERSURNAME:
        setSurname(event.target.value);
        break;
      default:
        console.log("Unknown event")
    }
  };

  const handleAddMember = (event) => {
    let newMember = {
      "name": memberName,
      "surname": memberSurname
    };
    let newList = memberList.concat(newMember);

    setMemberList(newList);
    setName("");
    setSurname("");
  }

  return(
    <Grid container spacing={2} className="form">
      <Paper elevation={3}>
        <Grid item xs={12} className="form-item">
          <TextField
            label="Name"
            value={memberName}
            name={VALUES.MEMBERNAME}
            size="small"
            variant="standard"
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} className="form-item">
          <TextField
            label="Surname"
            value={memberSurname}
            name={VALUES.MEMBERSURNAME}
            size="small"
            variant="standard"
            onChange={handleChange}/>
        </Grid>
        <IconButton aria-label="delete" onClick={handleAddMember}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Paper>
      <Grid item xs={12}>
      <Paper elevation={3}>

      </Paper>
      </Grid>
    </Grid>
  )
}

export {CreateClub};
