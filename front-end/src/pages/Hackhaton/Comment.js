import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

export default function Comment() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
    <div >

                <TextField style={{width:'870px'}}
                    id="filled-multiline-flexible"
                    label="Fill Free to Give A comment "
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    variant="filled"
                />
    </div>
        </form>
    );
}
