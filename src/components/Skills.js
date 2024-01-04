import { Grid } from "@mui/material";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Rotate, Zoom } from "react-reveal";
import { ZoomDiv } from "./AllStyles";
import "./All.css";

const Skills = () => {
  const skillset = [
    {
      link: "https://img.icons8.com/cute-clipart/46/go-logo.png",
      name: "golang",
    },
    {
      link: "https://img.icons8.com/officel/50/000000/react.png",
      name: "react",
    },
    {
      link: "https://img.icons8.com/color/48/000000/javascript--v2.png",
      name: "javascript",
    },
    {
      link: "https://img.icons8.com/fluency/48/typescript--v2.png",
      name: "typescript",
    },
    {
      link: "https://img.icons8.com/color/48/000000/python--v2.png",
      name: "python",
    },
    {
      link: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "html",
    },
    {
      link: "https://img.icons8.com/fluency/50/000000/mysql-logo.png",
      name: "mysql",
    },
    {
      link: "https://img.icons8.com/color/48/000000/redux.png",
      name: "redux",
    },
    {
      link: "https://img.icons8.com/fluency/48/google-cloud.png",
      name: "gcp",
    },
    {
      link: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
      name: "aws",
    },
    {
      link: "https://img.icons8.com/color/48/000000/lambda.png",
      name: "lambda",
    },
    {
      link: "https://img.icons8.com/nolan/50/amazon-s3.png",
      name: "s3",
    },
    {
      link: "https://img.icons8.com/nolan/50/api-settings.png",
      name: "RestAPI",
    },
    {
      link: "https://img.icons8.com/nolan/50/git.png",
      name: "git",
    },
    {
      link: "https://img.icons8.com/ios/50/000000/django.png",
      name: "django",
    },
    {
      link: "https://img.icons8.com/nolan/50/github.png",
      name: "github",
    },
    {
      link: "https://img.icons8.com/nolan/50/heroku.png",
      name: "heroku",
    },
    {
      link: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      name: "netlify",
    },
    {
      link: "https://img.icons8.com/color/50/000000/c-programming.png",
      name: "C",
    },
    {
      link: "https://img.icons8.com/color/50/000000/c-plus-plus-logo.png",
      name: "C++",
    },
    {
      link: "https://img.icons8.com/color/50/000000/java-coffee-cup-logo.png",
      name: "java",
    },
    {
      link: "https://img.icons8.com/nolan/50/php.png",
      name: "php",
    },
    {
      link: "https://img.icons8.com/color/48/000000/css3.png",
      name: "css",
    },
    {
      link: "https://img.icons8.com/wired/50/000000/postman-api.png",
      name: "postman",
    },
    {
      link: "https://img.icons8.com/color/48/000000/nodejs.png",
      name: "nodejs",
    },
    {
      link: "https://img.icons8.com/fluency/48/000000/jupyter.png",
      name: "jupyter",
    },
    {
      link: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
      name: "vs code",
    },
    {
      link: "https://img.icons8.com/color/48/000000/pycharm.png",
      name: "pycharm",
    },
  ];
  return (
    <div id="skills">
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        padding={"10% 0% 10% 10%"}
        Direction="row"
        backgroundColor={"#17252A"}
        justifyContent="flex-start"
        alignItems="flex-start">
        <Grid xs={12} sm={12} md={12} lg={12}>
          <p className="skill-title">
            <Zoom>{"Imports in my backpack are"}</Zoom>{" "}
          </p>
        </Grid>
        {skillset.map((skill) => (
          <Zoom>
            <Grid xs={4} sm={3} md={2} lg={1} className="tech-logo">
              <center>
                <img src={skill.link} />
                <br />
                <span className="skill-name">{skill.name}</span>
              </center>
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
