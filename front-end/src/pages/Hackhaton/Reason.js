import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Reason() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{marginLeft:'-500px',marginTop:'-60px',marginRight:'30px'}}>
                <TextField style={{width:'300px',marginLeft:'110px'}}
                    id="filled-multiline-flexible"
                    label="just put your idea"
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
