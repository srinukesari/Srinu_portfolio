import React, { Component } from 'react'
import srinu from './pics/srinu_port.jpg'
import './All.css'
import {Container,Row,Col} from 'react-bootstrap'
import Project from './Project'
import Work from './Work'
import Skills from './Skills'
import Contact from './Contact'
import Resume from "./Resume"
import Intro from './Intro'

class Home extends Component {
  render() {
    return (
      <Container>
        <Intro/>
        < Skills />
        < Work />
        < Project />
        < Resume />
        < Contact />
        </Container>
    )
  }
}

export default Home;