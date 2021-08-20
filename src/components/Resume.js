import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import './All.css'
import resume from './srinu_kesari_profile.pdf'
import Modal from 'react-bootstrap/Modal'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // install this library



class Resume extends Component {

    constructor(props) {
      super(props)
      this.state = {
         show:false,
      }
    }
    
    view = (e) =>{
        console.log("all okay")
        this.setState({show:true});
    }
    
    render() {
    return (
    <Container id = "resume">
        <p id="pro_title">Check out my resume!</p>
        <Row>
            <Col>
                <center>
                    <button onClick = {this.view} >View </button>
                </center>
            </Col>
            <Col>
                <center>
                    <span class = 'download'>
                    <a href={resume} download = "srinu_kesari_profile">Download</a>
                    </span>
                </center>
            </Col>
        </Row>

        <Modal show={this.state.show}  onHide={() => {this.setState({show:false})}} dialogClassName="custom-dialog">
            <Modal.Header closeButton>
            <Modal.Title>Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={resume}  />
                </Worker>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning" onClick = {() => {this.setState({show:false})}}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </Container>
    )
  }
}

export default Resume;
