import React, { Component } from 'react'
import './All.css'
import logo from './pics/logo.jpeg'
import {Container} from "react-bootstrap"
class Header extends Component {
  render() {
    return (
      <Container>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container">
                <a href="/" class="navbar-brand"><img class = "logo" src = {logo}></img></a>
                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbar9">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="navbar-collapse collapse" id="navbar9">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#skills"><b>Skills</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work"><b>Work</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project"><b>Projects</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resume"><b>Resume</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact"><b>Contact</b></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </Container>
    )
  }
}

export default Header;
