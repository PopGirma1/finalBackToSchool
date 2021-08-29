import {
    withStyles,
    Typography,
} from "@material-ui/core";
import React , {Component} from "react";
import FeedBack from "./Feedback";
const useStyles = (theme) => ({

    root: {
        display: "flex",
        margin: "2em",
        gridTemplateColumns: "5fr 2fr",
        gridColumnGap: "80px",
    },

    paragraphStyling: {
        lineHeight: "1.5",
        padding: "20px",
        margin: "20px",
        textTransform: "full-width",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },
    register:{
        borderRadius:'12px'
    },
    Entertainments:{
        color:'green',
    }

});

class SideEvent extends Component{
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };
    render(){
        const { classes } = this.props;
    return (
        <div>
            <Typography variant="h5" >Side Events</Typography>
            <div className={classes.root} >
                <Typography variant="h6" style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
                    The objective of side events is to inspire the youth generation to have a cause to stand for and let them be aware opportunities eventually find its way for those who hassle the most.
                    This year, the blend effect of our event, onsite & virtual, will bring together creative minds & seasoned practitioners from every corner of thee globe to contribute ideas that worth sharing.
                </Typography>
                <Typography variant="h6" style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
                    Introductive seminars, workshops, & competitions, are the main part of side-events that will allow students creativity get a chance to be recognized in public, creating an opportunity for their work to be part of solutions for social challenges.
                    Furthermore, well-seasoned invited practitioners from every corner of the globe take part on sharing life-long wisdoms, either on-stage or virtual, are also unique values the event offers for the scholar community.
                </Typography>

            </div>
            <div>
                <button className={classes.register}> <Typography variant="h4" style={{color:'green'}}>   Registration is now open!</Typography></button>
                <Typography variant="h6" style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
                   <ul>
                       Competitions
                       <li>Chess Competition</li>
                       <li>Hackathon Competition in collaboration with intellectual international school.</li>
                       <li>Math Olympics Competition</li>
                       <li>Maze Competition</li>
                       <li>Eleni Mohammed Poem & Writing Competition</li>
                       <li>Virtual Coffee Debate Contest</li>

                   </ul>
                </Typography>

            </div>

            <div style={{ margin: "2em", lineHeight: "1.5" }} className={classes.paragraphStyling}>
            <Typography variant="h4">     Webinars/Workshops/Conferences </Typography>
                <Typography variant="h5" style={{  lineHeight: "1.5" }} className={classes.paragraphStyling}>
                    The core values in attending workshops, onsite & virtual, are the following,
                    informative, inspiring, educational, & entertaining.
                    In accord, we bring home latest happenings, global AI practices,
                    and the most rewarding approach’s that may contribute for the advancement of quality education in Ethiopia,
                    through integrate tools of technology for making education all inclusive.
                    <ul>
                    <li>The future of Education.</li>
                    <li>Is 45 Minute/class still relevant today?</li>
                    <li>What AI should be doing today?</li>
                    <li>Be ware of Podcasting!</li>
                    <li>How to take the most out of online education platforms?</li>
                    <li>Effects of Stereotypes, Positive & Negative, on Students Academic performance.</li>
                    <li>Mind-Set VS Culture of Honor in Ethiopia.</li>
                    <li>3D Printing Application in Education.</li>
                    <li>How to create Dopamine mindset?</li>
                    <li>Japan, South Korea, & Finland Secret Formula of quality Education.</li>
                    <li>Introduction to Nano Technology in Ethiopia</li>
                    <li>The Art of Self Care & Personal Safety for students</li>
                    <li>E-books relevance in todays schooling</li>

                </ul>
                </Typography>
                <Typography variant="h4">
                    Would you like to be a speaker in either of the sessions?

                    Arrange a personal meeting hear or Register.

                </Typography>

            </div>

            <div className={classes.root}>
                <Typography variant="h4">Entertainments</Typography>
            <Typography variant="h5">
                <ul style={{  lineHeight: "1.5" }} className={classes.Entertainments}>
                    Although we take our job seriously, Fun is a part of life and hear are some Ethiopian style.
                    <li>Talent Show Performance</li>
                    <li>Heath & Yoga Sessions</li>
                    <li>City Tour  & Retreat Programs</li>
                </ul>
            </Typography>

            </div>
            <Typography variant="h6">Do this valuable thing! Feedback Us!</Typography>
            <div className="feedback">
                <FeedBack onSubmit={this.onSubmit} />
            </div>
        </div>

    );
}

}
export default withStyles(useStyles, { withTheme: true })(SideEvent);

