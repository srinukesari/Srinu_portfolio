import { Grid, Zoom } from "@mui/material";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./All.css";
import { LightSpeedDiv, ZoomDiv } from "./AllStyles";
class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <center>
          <Grid container paddingTop={"4%"}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center className="contact_title">
                <ZoomDiv text={"Wanna Interact!"} />
              </center>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center className="contact_desc">
                <LightSpeedDiv
                  text={
                    "Always welcome to have tech discussion! If you have any great ideas, queries or bugs, feel free to mail me. i'll try my best to catch up!"
                  }
                />
              </center>
              <br />
              <center className="contact_desc">
                <LightSpeedDiv text={"Any exciting ideas...? Open to collab"} />
              </center>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center className="contact_button">
                <a
                  className="contact_button_a"
                  href="mailto:srinukesari333@gmail.com">
                  Say Hello
                </a>
              </center>
            </Grid>

            <Grid
              container
              paddingTop={"10%"}
              justifyContent="center"
              columnSpacing={{ xs: 1, sm: 4, md: 5, lg: 7 }}
              rowSpacing={{ xs: 6, sm: 5, md: 2, lg: 1 }}
              alignItems={"flex-end"}
              direction="row">
              <Grid item>
                <a href="https://www.linkedin.com/in/kesari-lakshmi-srinivas-020705186/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#C5C6C7">
                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                  </svg>
                </a>
              </Grid>
              <Grid item>
                <a href="https://github.com/srinukesari">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    fill="#C5C6C7"
                    viewBox="0 0 16 16">
                    <path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"></path>
                  </svg>
                </a>
              </Grid>
              <Grid item>
                <a href="https://stackoverflow.com/users/13968631/srinu-kesari">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#C5C6C7">
                    <path d="M 19.03125 1.96875 L 17.09375 2.5 L 18.90625 9.25 L 20.84375 8.75 Z M 14.09375 4.0625 L 12.5625 5.34375 L 17.0625 10.71875 L 18.59375 9.4375 Z M 10.71875 7.53125 L 9.71875 9.25 L 15.78125 12.75 L 16.78125 11.03125 Z M 8.96875 11.125 L 8.4375 13.03125 L 15.21875 14.84375 L 15.71875 12.9375 Z M 8.1875 14.28125 L 8.03125 16.28125 L 15 16.875 L 15.1875 14.875 Z M 5 15 L 5 22 L 18 22 L 18 15 L 16 15 L 16 20 L 7 20 L 7 15 Z M 8 17 L 8 19 L 15 19 L 15 17 Z"></path>
                  </svg>
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.hackerrank.com/srinu_lucky">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="#C5C6C7">
                    <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"></path>
                  </svg>
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.instagram.com/srinu_kesari/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#C5C6C7">
                    {" "}
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                  </svg>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </center>
        <center>
          <p className="compiled">
            <ZoomDiv text={"Compiled by Srinu Kesari"} />
          </p>
        </center>
      </div>
    );
  }
}

export default Contact;
