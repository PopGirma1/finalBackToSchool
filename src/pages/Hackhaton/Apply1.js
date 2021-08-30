import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:'auto'
    },
    apply:{
        backgroundColor:'0x268e54'
    },

    contact1:{
        padding:'90px'
    }
}));


function Apply1(props) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
        <Card className={classes.apply}><CardContent>
            <Typography variant="h5">  3rd Party representative: </Typography>
            <form>
                <Card className={classes.contact1}><CardContent className="frmctl">
                    <FormControl>
                        <InputLabel htmlFor="my-input"> Full Name</InputLabel>
                        <Input id="my-input" type={"text"} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" type={"email"} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                        <Input id="my-input" type={"number"} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Title</InputLabel>
                        <Input id="my-input" type={"text"} aria-describedby="my-helper-text" />
                    </FormControl>



                </CardContent>
                    <Button variant="contained" color="primary" href="#contained-buttons" className="btn">Subimit</Button>

                </Card>

            </form>
        </CardContent></Card>

        </div>
    );
}

export default Apply1;
