import React, { Component } from 'react'
import './All.css'
import {Container} from 'react-bootstrap'
class Work extends Component {
  render() {
    return (
    <div id = "work">
        <Container>
            <p id="pro_title">Work Experience</p>
            <div class = "pro">
                <p id = "pro_name">Borderfree Technologies</p>
                <p id = "pro_con">
                    Full Stack Developer
                    <li>Developed 1:1 call functionality for consumer interaction with brand owners</li>
                    <li>Implemented Permissions Engine which restricts the access to events functionalities and user settings etc., in REVO 2.0.</li>
                    <li>Devised Authentication of Admin through OTP and Magic Link in REVO 2.0.</li>
                    <li>Optimised Policy-Permission API calls which reduces 2.5 seconds of runtime to 700-800 ms in REVO 1.0.</li>
                    <li>Developed JWT token Verification which provides user- access to some resources of the product in REVO 1.0.</li>
                    <li>Integrated Advertising Engine API calls and formulated the flow in REVO 2.0.</li>
                    <li>Resolved Production level issues in HLS Layout in REVO 1.0.</li>
                </p>
            </div>
            <div class = "pro">
                <p id = "pro_name">Virtusa </p>
                <p id = "pro_con">
                    Associate Software Engineer
                    <li>Working Talend Bigdata and Data Integration Tools</li>
                    <li><strong>Creating jobs in Talend</strong></li>
                </p>
            </div>
            <div class = "pro">
                <p id = "pro_name">Schemax </p>
                <p id = "pro_con">
                    Assistant Engineer
                    <li>Inspecting API requests and responses using Swagger UI.</li>
                    <li>Migrating database models using CLI.</li>
                </p>
            </div>
        </Container>
    </div>
    )
  }
}

export default Work
