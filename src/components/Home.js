import React, { Component } from 'react'
import srinu from './pics/srinu_port.jpg'
import './All.css'
import {Container,Row,Col} from 'react-bootstrap'
import Project from './Project'
import Work from './Work'
import Skills from './Skills'
import Contact from './Contact'
import Resume from "./Resume"

class Home extends Component {
  render() {
    return (
      <Container>
        <figure className ="position-relative">
        <img src = {srinu} class='back' ></img>
        <figcaption>
          <p id= "title">Hai
            <p id ="name"> I'm    <b id='first'> Srinu</b><b id ='last'> Kesari</b></p>
            Full Stack developer
          </p>
        </figcaption>
        < Skills />
        < Work />
        < Project />
        < Resume />
        < Contact />
        </figure>

        </Container>
    )
  }
}

export default Home;