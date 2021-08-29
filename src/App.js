import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";
import NavTabs from './components/NavTabs'
import MainBody from './pages/Home'
import Footer from './components/Footer'
import About from "./pages/AboutUs/About";
import Contact from "./pages/ContactUs/Contact";
import Hackhaton from "./pages/Hackhaton/Hackhaton";
import Exhibitor from "./pages/Exhibitors/Exhibitor";
import SideEvent from "./pages/SideEvents/SideEvent";
import Testimonial from "./pages/TestimonialesAndGallery/Testimonial";


const useStyles = ((theme) => ({
  root: {
  },
  mainParts: {
    marginTop: '120px'
  },
}));
class App extends React.Component {
  state = {token: ''};
  setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    this.setState({token: token})
  };
  getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken.token
    } else {
      return ''
    }
  };
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.root}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavTabs getToken={this.getToken}/>
            <Container className={classes.mainParts}>
              <Route  path='/' exact component={MainBody} />
              <Route  path='/Contact' component={Contact}/>
              <Route  path='/Exhibitor' component={Exhibitor}/>
              <Route  path='/Hackhaton' component={Hackhaton}/>
              <Route  path='/SideEvents' component={SideEvent}/>
              <Route  path='/TestimonialAndGallery' component={Testimonial}/>
              <Route  path='/About' component={About}/>
            </Container>
          </BrowserRouter >
          <Footer/>
        </div>
    );
  }
}
export default withStyles(useStyles)(App);
