import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './All.css'


class Skills extends Component {
  render() {
    return (
      <div id = 'skills'>
        <Container>
            <p id="pro_title">Skills</p>
            <p id = "pro_name">Worked on</p>
            <Row>
                <Col>
                    <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/python--v2.png"/><br/>python</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/html-5.png"/><br/>html</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/css3.png"/><br/>css</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/><br/>javascript</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/nolan/50/php.png"/><br/>Php</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/fluency/50/000000/mysql-logo.png"/><br/>mysql</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/officel/50/000000/react.png"/><br/>react</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/redux.png"/><br/>redux</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"/><br/>aws</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/lambda.png"/><br/>lambda</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/nolan/50/amazon-s3.png"/><br/>s3</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/nolan/50/api-settings.png"/><br/>RestAPI</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/lambda.png"/><br/>lambda</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/nolan/50/git.png"/><br/>git</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/redux.png"/><br/>redux</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/ios/50/000000/django.png"/><br/>django</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/nolan/50/heroku.png"/><br/>heroku</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"/>netlify</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/50/000000/c-programming.png"/><br/>C</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/50/000000/c-plus-plus-logo.png"/><br/>C++</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/50/000000/java-coffee-cup-logo.png"/><br/>Java</center></div>
                </Col>
                
            </Row>
            <p id = "pro_name">IDE:</p>
            <Row>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"/><br/>vs code</center></div>
                </Col>
                <Col>
                <div className='tech-logo'><center><img src="https://img.icons8.com/color/48/000000/pycharm.png"/><br/>pycharm</center></div>
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
