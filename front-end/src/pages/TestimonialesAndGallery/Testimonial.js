
import React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ReactPlayer from "react-player"
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from "@material-ui/core/Avatar";
import YoutubeEmbed from "./Youtube";

const useStyles = makeStyles((theme) => ({
    feedback: {
        width:'80px',
        height:'200px'
    },
    feedback1: {
     marginTop:'70px',
        width:'400px',
    },
    main:{
        display:'flex',
        flexDirection: 'row',
        marginTop:'20px'
    },
    center:{
        marginRight:'20px'
    },
    logo:{
        width:'auto',
        height:'200px'
    },
    bottom:{
        marginTop:'20px'
    },
    contact:{
        marginTop:'20px',
        marginBottom:'30px'
    }
}));

function Testimonial(props) {
    const classes = useStyles();
    return (
        <div>
            <Card><CardContent>
                <form>
                <Typography>Can you do this for events like us! Yes you can! !</Typography>
                <FeedbackIcon color="primary"  className={classes.feedback}></FeedbackIcon>
                <TextField id="outlined-basic" label="text your feedback here " variant="outlined" className={classes.feedback1} />
                <Button variant="contained" color="primary">Submit</Button>
                </form>
            </CardContent></Card>
            <Typography variant="h5" style={{marginTop:'20px'}}>  RECENT EXPOS </Typography>

            <div className={classes.main}>
                <Card className={classes.center}><CardContent >
                    <Typography>B2SXET2022</Typography>
                    <Avatar alt="Remy Sharp" src="/asset/img/logo1.jpg" className={classes.logo}/>
                </CardContent></Card>
                <Card className={classes.center}><CardContent >
                    <Typography>B2SXET2019</Typography>

                     <YoutubeEmbed></YoutubeEmbed>

                </CardContent></Card>
            </div>

            <div className={classes.main}>
                <Card className={classes.center}><CardContent>
                    <Typography>B2SXET2018</Typography>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />

                </CardContent></Card>
                <Card><CardContent>
                    <Typography>B2SXET2017</Typography>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />
                </CardContent></Card>
            </div>

            <div className={classes.bottom}>
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

                    <Card ><CardContent>
                        <Typography>Follow us on: </Typography>
                        <FacebookIcon color="primary"></FacebookIcon>
                        <YouTubeIcon color="primary"></YouTubeIcon>
                        <LinkedInIcon color="primary"></LinkedInIcon>
                        <TwitterIcon color="primary"></TwitterIcon>
                        <InstagramIcon color="primary"></InstagramIcon>
                    </CardContent></Card>
                </CardContent></Card>
                <Card className={classes.bottom}><CardContent>
                    <Typography variant="h5"> Welbo/Line/Wechat Virtual Platforms</Typography>
                    Zoom/Goggle Meet/Skype
                </CardContent></Card>

            </div>

        </div>
    );
}

export default Testimonial;
