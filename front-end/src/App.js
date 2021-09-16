import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { withStyles, Container } from "@material-ui/core";

import { Footer } from "./pages/Home/common/footer";
import About from "./pages/AboutUs/About";
import Contact from "./pages/ContactUs/Contact";
import Hackhaton from "./pages/Hackhaton/Hackhaton";
import Exhibitor from "./pages/Exhibitors/Exhibitor";
import SideEvent from "./pages/SideEvents/SideEvent";
import Testimonial from "./pages/TestimonialesAndGallery/Testimonial";
import { NavBar } from "../src/pages/Home/common/navBar";
import TopBar from "../src/pages/Home/common/topBar";

import HomePage from "./pages/Home/home/homePage";
import "./pages/Home/assets/css/App.css";
import "./pages/Home/assets/css/gallery.css";
import "./pages/Home/assets/css/section.css";

const useStyles = (theme) => ({
  root: {
  },
  mainParts: {
    marginTop: "12px",
    marginBottom: "3px",
  },
});
class App extends React.Component {
  state = { token: "" };
  setToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    this.setState({ token: token });
  };
  getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken.token;
    } else {
      return "";
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* <NavTabs getToken={this.getToken} /> */}
          <TopBar />
          <NavBar getToken={this.getToken} />
          <div className={classes.mainParts}>
            <Route path="/" exact component={HomePage} />
            <Container>
              <Route path="/Contact" component={Contact} />
            </Container>
            <Container>
              <Route path="/Exhibitor" component={Exhibitor} />
            </Container>
            <Container>
              <Route path="/Hackhaton" component={Hackhaton} />
            </Container>
            <Container>
              <Route path="/SideEvents" component={SideEvent} />
            </Container>

            <Container>
              <Route path="/About" component={About} />
            </Container>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default withStyles(useStyles)(App);
