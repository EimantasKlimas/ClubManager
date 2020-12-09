import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const CreateClub = () => {
  return(
    <Grid container spacing={2} className="form">
      <Grid item xs={12}>
        <TextField label="Club Name" name="clubName" size="small" variant="standard" />
      </Grid>
    </Grid>
  )
}

export {CreateClub};
