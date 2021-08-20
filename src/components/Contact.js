import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './All.css'
class Contact extends Component {
  render() {
    return (
        <Container id  = "contact">
            <center><p id="pc"><b id = "first">Socail</b><b id="last">Media</b></p></center>
            <center><p id = "tag">You can find and follow me on:</p></center>
            <div class = "contact">
                <center>
                <Row>
                    <Col>
                      <a href = 'https://www.linkedin.com/in/kesari-lakshmi-srinivas-020705186/' >
                      <img  src="https://img.icons8.com/material-rounded/36/000000/linkedin--v1.png" alt = " not found"/>
                      </a>
                    </Col>
                    <Col>
                      <a href = 'https://github.com/srinukesari'>
                      <img src="https://img.icons8.com/material-rounded/36/000000/github.png" alt = " not found"/>
                      </a>
                    </Col>
                    <Col>
                      <a href = "https://www.instagram.com/srinu_._lucky/">
                      <img src="https://img.icons8.com/material-outlined/36/000000/instagram-new--v1.png" alt = " not found"/>
                      </a>
                    </Col>
                </Row>
                </center>
            </div>
            <p id = "tag"><b id = "first">mail me at </b><b id="last"> :) srinukesari333@gmail.com</b></p>
            <br></br>
            <center><p>
              <b id ='first' >Made with <img src="https://img.icons8.com/office/16/000000/filled-like--v1.png" alt = " not found"/> by </b> 
            <b id ="last" >Srinu </b><b id ='first' >Kesari</b></p></center>
        </Container>
    )
  }
}

export default Contact
