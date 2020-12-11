import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {VALUES} from "../constants/values";
import {MemberList} from "../components/MemberList"
import "../styles/CreateClub.css"
import Container from "@material-ui/core/Container";

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

  //TODO convert to components
  return(
    <Grid container spaceing={2}>
      <Paper elevation={3}>
      <Grid container spacing={2}>
        <Container maxWidth="xs">
          <form>
            <Grid container spacing={3}>

              <Grid item xs={12} className="member-form-item">
                <TextField
                  label="Club Name"
                  name={VALUES.MEMBERSURNAME}
                  size="small"
                  variant="standard"
                  onChange={handleChange}/>
              </Grid>

              <Grid item xs={12}>
                <IconButton aria-label="addMember" onClick={handleAddMember}>
                  <AddCircleIcon fontSize="large" />
                </IconButton>
              </Grid>

            </Grid>
          </form>
        </Container>
      </Grid>
      </Paper>

    <Grid item container spacing={2} className="member-form" xs={3}>
      <Paper elevation={3}>
        <Grid item xs={12} className="member-form-item">
          <TextField
            label="Member Name"
            value={memberName}
            name={VALUES.MEMBERNAME}
            size="small"
            variant="standard"
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} className="member-form-item">
          <TextField
            label="Member Surname"
            value={memberSurname}
            name={VALUES.MEMBERSURNAME}
            size="small"
            variant="standard"
            onChange={handleChange}/>
        </Grid>
        <IconButton aria-label="addMember" onClick={handleAddMember}>
          <PersonAddIcon fontSize="large" />
        </IconButton>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <MemberList memberList = {memberList}/>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
    </Grid>
  )
}

export {CreateClub};
