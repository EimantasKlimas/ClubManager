import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import {Typography} from "@material-ui/core";

const SuccessMessage = ({open, success}) => {
  return(
    <Collapse in={open} timeout="auto" unmountOnExit>
      {(success === 200) ? <Typography> Success</Typography> : <Typography>Failure</Typography>}
    </Collapse>
  )
}

export {SuccessMessage};
