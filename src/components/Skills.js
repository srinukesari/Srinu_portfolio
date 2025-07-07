import { Grid } from "@mui/material";
import React from "react";
import { Zoom } from "react-reveal";
import "./All.css";

const Skills = () => {
  const skillset = [
    {
      link: "https://img.icons8.com/cute-clipart/46/go-logo.png",
      name: "Go",
    },
    {
      link: "https://img.icons8.com/officel/50/000000/react.png",
      name: "React",
    },
    {
      link: "https://img.icons8.com/color/48/000000/javascript--v2.png",
      name: "JS",
    },
    {
      link: "https://img.icons8.com/color/48/000000/python--v2.png",
      name: "Python",
    },
    {
      link: "https://img.icons8.com/color/48/000000/html-5.png",
      name: "HTML",
    },
    {
      link: "https://img.icons8.com/fluency/50/000000/mysql-logo.png",
      name: "MySQL",
    },
    {
      link: "https://img.icons8.com/?size=48&id=38561&format=png&color=000000",
      name: "PostgreSQL",
    },
    {
      link: "https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png&color=000000",
      name: "Docker",
    },
    {
      link: "https://img.icons8.com/fluency/48/google-cloud.png",
      name: "GCP",
    },
    {
      link: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
      name: "AWS",
    },
    {
      link: "https://img.icons8.com/color/48/000000/lambda.png",
      name: "Lambda",
    },
    {
      link: "https://img.icons8.com/nolan/50/amazon-s3.png",
      name: "S3",
    },
    {
      link: "https://img.icons8.com/nolan/50/api-settings.png",
      name: "API",
    },
    {
      link: "https://img.icons8.com/nolan/50/git.png",
      name: "Git",
    },
    {
      link: "https://img.icons8.com/ios/50/000000/django.png",
      name: "Django",
    },
    {
      link: "https://img.icons8.com/nolan/50/github.png",
      name: "github",
    },
    {
      link: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      name: "Netlify",
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
      name: "Java",
    },
    {
      link: "https://img.icons8.com/color/48/000000/css3.png",
      name: "CSS",
    },
    {
      link: "https://img.icons8.com/wired/50/000000/postman-api.png",
      name: "Postman",
    },
    {
      link: "https://img.icons8.com/color/48/000000/nodejs.png",
      name: "Node.js",
    },
    {
      link: "https://img.icons8.com/fluency/48/000000/jupyter.png",
      name: "Jupyter",
    },
    {
      link: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
      name: "VS Code",
    },
    {
      link: "https://img.icons8.com/color/48/000000/pycharm.png",
      name: "PyCharm",
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
          <Zoom key={skill.name}>
            <Grid xs={4} sm={3} md={2} lg={1} className="tech-logo">
              <center>
                <img src={skill.link} alt={skill.name} />
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
