import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './All.css'

class Skills extends Component {
  render() {
    return (
      <div id = 'skills'>
        <Container>
            <p id="pro_title">Skills</p>
            <p id = "pro_name">Comfortable with:</p>
            <Row>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/python--v2.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/html-5.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/css3.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png"/></center>
                </Col>
            </Row>
            <p id = "pro_name">Familiar With:</p>
            <Row>
                <Col>
                    <center><img src="https://img.icons8.com/ios/50/000000/django.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/postgreesql.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/nolan/64/api-settings.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/nolan/64/heroku.png"/></center>
                </Col>
            </Row>
            <p id = "pro_name">Basics of:</p>
            <Row>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/c-programming.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/officel/40/000000/react.png"/></center>
                </Col>
            </Row>
            <p id = "pro_name">IDE:</p>
            <Row>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"/></center>
                </Col>
                <Col>
                    <center><img src="https://img.icons8.com/color/48/000000/pycharm.png"/></center>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>

            </Row>
        </Container>
      </div>
    )
  }
}

export default Skills
