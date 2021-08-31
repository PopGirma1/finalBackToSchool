import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Country from "../ContactUs/Country";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Offer from "./Offer";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection:'row',
        marginLeft:'-30px'
    },
    register:{
        padding:'25px',
    },
    country:{
        marginTop:'30px'
    },
    map:{
        marginRight:'-400px',
        padding:'25px'
    },
    today:{
        backgroundColor:'#F3F4EB',
        padding:'30px',
        borderRadius:'22px',
        color:'#3C10C2',
        fontSize:'26px'
    },
    total:{
        backgroundColor:'#F9F9F5',
        borderRadius:'22px',

    },
    contact:{
        margin:'60px'
    }
}));


function Register(props) {
    const classes=useStyles();
    return (
        <div>
            <Card className={classes.total}><CardContent>
            <Typography >NOW IT’S IS YOUR TURN TO MEET YOUR RIGHT STUDENTS</Typography>
            <Typography variant="h5">BECOME A SPONSOR! </Typography>
            <Typography>
                Join our international education platform and we make sure
                targeted audience of educationalists & international
                partners that can extend your business globally should witness your presence.
            </Typography>

                <Card className={classes.today}><CardContent><Typography variant="h5">
                    Do this easy thing!
                    Register Today.
                </Typography></CardContent></Card>

            </CardContent></Card>
            <div className={classes.root}>
                <div className={classes.register}>
                    <Card ><CardContent >
                        <form >
                            <Card className={classes.register}><CardContent className="frmctl">
                                <FormControl>
                                    <InputLabel htmlFor="my-input">  Name</InputLabel>
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
                                    <InputLabel htmlFor="my-input">Company</InputLabel>
                                    <Input id="my-input" type={"text"} aria-describedby="my-helper-text" />
                                </FormControl>
                                <FormControl className={classes.country}>

                                    <Country></Country>

                                </FormControl>

                            </CardContent>
                                <Button variant="contained" color="primary" href="#contained-buttons" className="btn">Subimit</Button>
                            </Card>
                        </form>
                    </CardContent></Card>
                </div>
                <div className={classes.map}>

                        <iframe
                            title="map"
                            className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3512717568565!2d38.755158364835765!3d9.031685441433574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f13face90f%3A0x5cf68b9e8b6cf775!2sFirdu%20Commercial%20Center!5e0!3m2!1sen!2set!4v1630355584920!5m2!1sen!2set"
                            frameBorder="0"
                            style={{border: "0", width: "620px", height: "500px"}}
                            allowFullScreen
                        ></iframe>

                </div>
            </div>

            <div>
                <Offer></Offer>
            </div>
            <div>
                <Card><CardContent>
                    Contact Information

                    <Card><CardContent>
                        Company: Noosphere Affairs
                        Trading P.L;C
                        Address:   Firdu Commercial
                        Building, 3rd Floor
                        Office no 308.

                        P.O.box: 54178
                        Tel: 1  +251-974 082036
                        Tel: 2  +251-974 082037
                    </CardContent></Card>
                    <Card className={classes.contact}><CardContent>
                        Email:
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            digital@backtoschoolethiopia.org
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            back2schooleth@gmail.com
                        </Link>
                        <Typography>What’s up No:     +251 974082037</Typography>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            www.backtoschoolethiopia.org
                        </Link>
                    </CardContent></Card>

                    <Card><CardContent>
                        <Typography>Follow us on: </Typography>
                        <FacebookIcon color="primary"></FacebookIcon>
                        <Button variant="contained" color="primary" className={classes.btn}> <td onClick={()=> window.open("http://hackathon.backtoschoolethiopia.org/", "_blank")}>Facebook</td></Button>
                        <TelegramIcon color="primary"></TelegramIcon>

                        <Button variant="contained" color="primary" className={classes.btn}> <td onClick={()=> window.open("http://hackathon.backtoschoolethiopia.org/", "_blank")}>Telegram</td></Button>
                        <LinkedInIcon color="primary"></LinkedInIcon>

                        <Button variant="contained" color="primary" className={classes.btn}> <td onClick={()=> window.open("http://hackathon.backtoschoolethiopia.org/", "_blank")}>LinkedIn</td></Button>
                        <TwitterIcon color="primary"></TwitterIcon>

                        <Button variant="contained" color="primary" className={classes.btn}> <td onClick={()=> window.open("http://hackathon.backtoschoolethiopia.org/", "_blank")}>Twitter</td></Button>
                        <InstagramIcon color="primary"></InstagramIcon>

                        <Button variant="contained" color="primary" className={classes.btn}> <td onClick={()=> window.open("http://hackathon.backtoschoolethiopia.org/", "_blank")}>Instagram</td></Button>

                    </CardContent></Card>

                </CardContent></Card>
            </div>

        </div>

    );
}

export default Register;
