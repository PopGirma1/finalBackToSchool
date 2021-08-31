import React ,{Component}from 'react'
import {AppBar, Button, Grid, Link, List, ListItem, Toolbar, Typography, withStyles} from "@material-ui/core/index";
import {Redirect} from "react-router-dom";
import Avatar from 'react-avatar';
import './Style.css'

const useStyles = ((theme) => ({

    root: {
        "& ul": {
            padding: '0px',
            margin: '0px',
        },
        "& li": {
            display: 'inline',
            padding: '0px',
            "& a": {
                color: 'black',
                padding: '20px'

            },

            "& a:hover": {
                textDecoration: 'none',
                color:'red',
            },

        },
        backgroundColor: '#eee',

        zIndex: theme.zIndex.drawer + 1,
    },

    logo:{
        width: '100px',
        height: "100px",
        marginLeft: '-10px'
    }
}));

class NavTabs extends Component {
onLogoutclicked = () =>{
        localStorage.clear();
        return <Redirect to='/'/>
    };

    isAuthnticated = () => {
        if(this.props.getToken()){
            return (

                <List>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/SideEvents'}>SideEvents</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/About'}>About</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Contact'}>Contact</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Exhibitor'}>Exhibitors</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Hackhaton'}>Hackhaton</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/TestimonialAndGallery'}>Testimonials and Gallery</Button></ListItem>
                </List>
            )
        }else{
            return (
                <List>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/SideEvents'}>SideEvents</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/About'}>About</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Contact'}>Contact</Button></ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/Exhibitor'}>Exhibitors</Button></ListItem>

                    <ListItem>
                        <div className="dropdown">
                            <button className="dropbtn">Hackhaton</button>
                            <div className="dropdown-content" >
                                <a href={process.env.PUBLIC_URL + '/Hackhaton'}>About</a>
                                <a href={process.env.PUBLIC_URL + '/Hackhaton'}>Apply</a>
                            </div>
                        </div>
                    </ListItem>
                    <ListItem><Button  href={process.env.PUBLIC_URL + '/TestimonialAndGallery'}>Testimonials And Gallery</Button></ListItem>
                </List>
            )
        }
    };
    render() {
        const {classes} = this.props;

        return (
            <AppBar className={classes.root} position='fixed' >
                <Toolbar>
                    <Grid container >
                        <Grid item sm={1}  >
                            <Avatar alt="Remy Sharp" src="/asset/img/logo1.jpg" className={classes.logo}/>
                        </Grid>
                        <Grid item sm={3}   >
                            <Typography variant='h4' style={{color:'red',margin:'10px'}}>Back to School Ethiopia</Typography>
                        </Grid>

                        <Grid item sm={8} align='center'>
                            {this.isAuthnticated()}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(useStyles)(NavTabs);




