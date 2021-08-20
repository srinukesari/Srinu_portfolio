import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './All.css'

class Project extends Component {
  render() {
    return (
      <div id = "project">
        < Container>
            <p id="pro_title">Projects</p>
            <div class = "pro">
                <p id = "pro_name">LineUP (Ongoing)</p>
                <p id = "pro_con">
                    <li>Website which gives best route map on selected spots.</li>
                    <li><strong>Tech Stack : Python , Django, React, DjangoRestFramework, PostgreSQL, HTML, CSS</strong></li>
                </p>
            </div>
            <div class = "pro">
                <p id = "pro_name">Pyrun</p>
                <p id = "pro_con">
                    <li>Website to practice python coding on solving different levels of problems.</li>
                    <li><strong>Tech Stack : Python , Django , PostgreSQL, HTML, CSS</strong></li>
                    <li><a href="http://pyrun.herokuapp.com/">link: hosted on heroku</a></li>
                </p>
            </div>
            <div class = "pro">
                <p id = "pro_name">Hand to Doc</p>
                <p id = "pro_con">
                    <li>NLP project which converts hand-written text document to system document</li>
                    <li><strong>Algorithms : Horizontal histogram projection, Vertical Projection Profile (VPP),
                        Top DownProfile(TDP)</strong></li>
                    <li><a href="https://github.com/srinukesari/Hand-to-Doc---NLP">GitHub link</a></li>
                    
                </p>
            </div>
            <div class = "pro">
                <p id = "pro_name">On Stream Ballot</p>
                <p id = "pro_con">
                    <li>it is a local-voting system deployed using Wamp Server inlocalhost.</li>
                    <li><strong>Tech Stack: HTML, CSS, JavaScript, PHP, MySQL.</strong></li>
                    <li><a href="https://github.com/srinukesari/On-Stream-Ballot">GitHub link</a></li>
                </p>
            </div>
        </Container>
      </div>
    )
  }
}

export default Project;