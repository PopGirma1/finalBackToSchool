import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import YearOfClass from "./YearOfClass";
import Level from "./Level";
import TopicOfInterest from './TopicOfInterest'
import Knowledge from "./Knowledge";
import Comment from "./Comment";
import ShareIcon from '@material-ui/icons/Share';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Reason from './Reason'


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
                    <FormControl>
                        <InputLabel htmlFor="my-input">Name of School</InputLabel>
                        <Input id="my-input" type={"text"} aria-describedby="my-helper-text" />
                    </FormControl>

                    <YearOfClass></YearOfClass>
                    <Level></Level>

                    <TopicOfInterest></TopicOfInterest>
                    <Knowledge></Knowledge>
                    <Typography style={{marginTop:'30px',marginLeft:'-500px',marginBottom:'20px'}}>Why do you want to participate?</Typography>
                    <Reason></Reason>
                    <Typography style={{marginLeft:'-400px',marginBottom:'40px',marginTop:'-30px'}}>  What will you do with the knowledge acquired?</Typography>
                    <Reason></Reason>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{marginLeft:'-260px'}}><Typography>  Do you have a personal laptop?</Typography></FormLabel>
                        <Typography style={{marginLeft:'-460px'}}> Caveat: Personal laptop recommended</Typography>
                        <RadioGroup aria-label="Do you have a personal laptop?" name="option" value={'value'} onChange={'handleChange'}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>

                     <Comment></Comment>
                    <div>
                        <Typography>Please share the message to friends.</Typography>
                        <ShareIcon></ShareIcon>
                    </div>

                    <Typography>Melkam Edele/GOOD LUCK!</Typography>

                </CardContent>
                    <Button variant="contained" color="primary" href="#contained-buttons" className="btn">Subimit</Button>

                </Card>

            </form>
        </CardContent></Card>

        </div>
    );
}

export default Apply1;
