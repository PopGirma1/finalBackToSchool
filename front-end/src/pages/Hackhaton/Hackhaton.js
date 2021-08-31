import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Apply from './Apply'
import Apply1 from "./Apply1";
import About from './About'
import YearOfClass from './YearOfClass'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding:"50px",
        justifyContent: "center",

    },
    anmation:{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: "center",
       justifyContent: "center",
        backgroundColor:'white',
        overflowY: 'scroll',
    },
    apply:{
        margin:'40px'
    }
}));

function Hackhaton() {
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <div>
                <AwesomeSlider>
                    <div className={classes.anmation}>
                        <About></About>
                    </div>
                    <div className={classes.anmation} id="Apply">
                            <Apply></Apply>
                    </div>
                </AwesomeSlider>
            </div>
            <div>
            <Apply1></Apply1>
            </div>
        </div>
    );
}
export default Hackhaton;


