import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
  root: {
    flexDirection: "end",
  },
  place: {
    marginLeft: "-74%",
  },
=======
    root: {
        flexDirection:'end'
    },
    place:{

        width:'100%'
    }
>>>>>>> 3f2a5b053d4889e847d8b1a7c6005caba18de951
}));

export default function Reason() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }} className={classes.root}>
      <form noValidate autoComplete="on">
        <br />
        <TextField
          className={classes.place}
          id="filled-multiline-flexible"
          label="What will you do with the knowledge acquired?"
          multiline
          maxRows={10}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </form>
    </div>
  );
}
