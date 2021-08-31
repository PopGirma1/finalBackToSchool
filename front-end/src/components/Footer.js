import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="back2schooleth@gmail.com">
                Contact Noosphere Events
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',

    },

    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        zIndex: theme.zIndex.drawer + 2,
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">

                        For all of your event success, Contact us,

                        Noosphere Events (Logo)
                        P.O.box: 54178
                        Email: back2schooleth@gmail.com
                        digital@backtoschoolethiopia.org

                        T1: +25 1974082036
                        T2: +25 1974082037


                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
