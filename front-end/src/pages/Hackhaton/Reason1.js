import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection:'end'
    },
    place:{
        marginLeft:'-74%'
    }
}));

export default function Reason1() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{marginBottom:'20px'}} className={classes.root}>
            <form  noValidate autoComplete="on">

                <br />
                <TextField className={classes.place}
                           id="filled-multiline-flexible"
                           label="why do you want to participate?"
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
