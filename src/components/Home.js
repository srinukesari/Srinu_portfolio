import React, { Component } from "react";
import "./All.css";
import Project from "./Project";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import Intro from "./Intro";
import About from "./About";
import { Container } from "react-bootstrap";
import Certificates from "./Certificates";

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
        <Contact />
      </Container>
    );
  }
}

export default Home;
