import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from "@material-ui/core/styles";
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
import Reason1 from "./Reason1";
import PersonalLaptop from './PersonalLaptop'
import backEndApi from "../../services/api";


const styles = theme => ({
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
});

class Apply1 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber:'',
            tittle: '',
            NameofTheSchool:'',
            errorMessage: '',
            successMessage: '',
        }

    }

    handleOtherSubmit(e){

        if(e.target.event.value ==''){

            this.setState({
                successMessage: 'successful information.'
            });
        }
        else {
            this.setState({
                errorMessage: "Please fill all the inputs correctly."
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.validateInput();
    }

    // get the api
    applyApiRequest = async (apply) => {
        const {data} = await backEndApi.post('/apply', apply);
        this.setState({
            errorMessage: '',
            successMessage: 'You have successfully  sent an apply  information. thank you '
        });
    };

    // validate correct input values

    validateInput = () => {
        const UserApply = {
            name: this.state.name,
            email: this.state.email,
            payerPhone: this.state.phoneNumber,
            tittle: this.tittle,
            NameofTheSchool: this.NameofTheSchool,
        };

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var nameFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (this.state.name && this.state.email && this.state.phoneNumber && this.state.tittle && this.state.NameofTheSchool) {
            if (!nameFormat.test(this.state.name)) {
                this.setState({errorMessage: "The name that you have entered is incorrect."})
            }

            else if (!mailformat.test(this.state.email)) {

                this.setState({errorMessage: "The email that you have provided is invalid."})

            }

            else if (!pattern.test(this.state.phoneNumber) && this.state.phoneNumber.length !=10) {
                this.setState({errorMessage: "You have to enter a correct phone Number"})
            }

            else if (!nameFormat.test(this.state.tittle)) {
                this.setState({errorMessage: "You have to enter a correct tittle name"})
            }

            else if (!nameFormat.test(this.state.NameofTheSchool))  {

                this.setState({errorMessage: "You have to enter correct Name of The School "})
            }
            else {
                if (this.state.errorMessage === '') {
                    this.applyApiRequest(UserApply)
                }
            }

        }

        else {
            this.setState({errorMessage: "Please fill all the inputs , reasons and the comment section correctly."})
        }


    };

    // accept each input values
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneNumberChange(event) {
        this.setState({phoneNumber: event.target.value})
    }

    onNameofTheSchoolChange(event) {
        this.setState({NameofTheSchool: event.target.value})
    }

    ontittleChange(event) {
        this.setState({tittle: event.target.value})
    }

// shows error or success message
    errorcheck = () => {
        if (this.state.errorMessage) {
            return <Typography variant='h6'
                               style={{
                                   color: 'red',
                                   marginLeft: '5px',
                                   fontSize: '14px'
                               }}>{this.state.errorMessage}</Typography>
        } else {
            return <Typography variant='body2' style={{color: 'red', display: 'none'}}>''</Typography>
        }
    };
    successCheck = () => {
        if (this.state.successMessage) {
            return <Typography variant='h6'
                               style={{color: 'green', marginLeft: '5px'}}>{this.state.successMessage}</Typography>
        } else {
            return <Typography variant='body2' style={{color: 'red', display: 'none'}}>''</Typography>
        }

    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.apply}><CardContent>
                    <Typography variant="h5"> 3rd Party representative: </Typography>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Card className={classes.contact1}><CardContent className="frmctl">
                            <FormControl>
                                <InputLabel htmlFor="my-input"> Full Name</InputLabel>
                                <Input
                                    value={this.state.name} onChange={this.onNameChange.bind(this)}
                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input
                                    value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                    id="my-input"
                                    type={"email"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                <Input
                                    value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)}
                                    id="my-input"
                                    type={"number"}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">tittle</InputLabel>
                                <Input

                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                    value={this.state.tittle} onChange={this.ontittleChange.bind(this)} />
                            </FormControl>

                            <FormControl className={classes.NameofTheSchool}>

                                <InputLabel htmlFor="my-input">Name of The School</InputLabel>
                                <Input
                                    id="my-input"
                                    type={"text"}
                                    aria-describedby="my-helper-text"
                                    value={this.state.NameofTheSchool} onChange={this.onNameofTheSchoolChange.bind(this)} />
                            </FormControl>


                            <YearOfClass onSubmit={this.handleOtherSubmit.bind(this)}></YearOfClass>

                            <Level onSubmit={this.handleOtherSubmit.bind(this)}></Level>

                            <TopicOfInterest onSubmit={this.handleOtherSubmit.bind(this)}></TopicOfInterest>

                            <Knowledge onSubmit={this.handleOtherSubmit.bind(this)}></Knowledge>

                            <Reason1 onSubmit={this.handleOtherSubmit.bind(this)}></Reason1>

                            <Reason onSubmit={this.handleOtherSubmit.bind(this)}></Reason>

                            <Comment onSubmit={this.handleOtherSubmit.bind(this)}></Comment>

                            <PersonalLaptop onSubmit={this.handleOtherSubmit.bind(this)}></PersonalLaptop>

                            <div>
                                <Typography>Please share the message to friends.</Typography>
                                <ShareIcon></ShareIcon>
                            </div>

                            <Typography>Melkam Edele/GOOD LUCK!</Typography>

                        </CardContent>

                            {this.state.errorMessage ? this.errorcheck() : this.successCheck()}
                            <Button variant="contained" color="primary"  type="submit"
                                    className="btn">Subimit</Button>

                        </Card>

                    </form>
                </CardContent></div>

            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Apply1);

