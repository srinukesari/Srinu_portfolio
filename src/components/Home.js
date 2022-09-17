import React, { Component } from "react";
import "./All.css";
import Project from "./Project";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";
import Intro from "./Intro";
import About from "./About";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import Certificates from "./Certificates";
import { Rotate } from "react-reveal";

class Home extends Component {
  render() {
    return (
      <Container id="homediv">
        <Intro />
        <About />
        <Skills />
        <Work />
        <Project />
        <Certificates />
        <Resume />
        <Contact />
      </Container>
    );
  }
}

export default Home;
