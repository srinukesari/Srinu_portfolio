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
