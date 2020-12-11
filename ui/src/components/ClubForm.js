import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {VALUES} from "../constants/values";
import "../styles/CreateClub.css"
import Container from "@material-ui/core/Container";

const ClubForm = (props) => {
  const handleChange = (event) => {
    props.onChange(event);
  }
  const handleChangeAndModify = (event, eventName) => {
    event.target.name = eventName;
    handleChange(event)
  }

  return(
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
            <IconButton aria-label="addMember" onClick={event => handleChangeAndModify(event, VALUES.ADDCLUB)}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  )

};

export {ClubForm};
