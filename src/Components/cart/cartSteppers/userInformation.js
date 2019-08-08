import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(theme => ({
  textField: {
    width: "60%",
    margin: "10px 20%",
    padding: "10px auto !important"
  },
  heading: {
    width: "fit-content",
    margin: "10px auto",
    color: "#00334e"
  }
}));

const UserInformation = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.heading}>Form</h1>
      <form>
        <TextField
          id="outlined-dense"
          label="Name"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-dense"
          label="Number"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          required
        />{" "}
        <TextField
          id="outlined-dense"
          label="Address"
          required
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
      </form>
    </div>
  );
};
export default UserInformation;
