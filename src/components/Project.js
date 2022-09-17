import React, { Component } from "react";
import { Grid } from "@mui/material";
import "./All.css";
import { Roll, Fade } from "react-reveal";
import { LightSpeedDiv } from "./AllStyles";
import { GitLink, SiteLink } from "./ProIcons";
const Project = () => {
  const project = [
    {
      ind: 1,
      title: "LineUp",
      status: "(In Progress)",
      desc: [
        "Website which gives best route map on selected spots.",
        "Python , Django, React, DjangoRestFramework, PostgreSQL, HTML, CSS, VScode",
      ],
      left: true,
      git: "https://github.com/srinukesari/react-django-lineup",
    },
    {
      ind: 2,
      title: "GoCart",
      desc: [
        "Ecomerce web page with basic cart,checkout functionalities, devised using AWS",
        "Dynamo DB, Lambda, API gateway, React, Node.js, VScode",
      ],
      left: false,
      git: "https://github.com/srinukesari/Ecomerce_web_page",
      site: "https://borderfree-gocart.netlify.app/",
    },
    {
      ind: 3,
      title: "Pyrun",
      desc: [
        "Website to practice python coding on solving different levels of problems.",
        "Python , Django , PostgreSQL, HTML, CSS, VS code",
      ],
      left: true,
      git: "https://github.com/srinukesari/Django_Project__pyrun",
      site: "http://pyrun.herokuapp.com/",
    },
    {
      ind: 4,
      title: "Hand to Doc",
      desc: [
        "NLP project which converts hand-written text document to system document.",
        "Horizontal histogram projection, Vertical Projection Profile (VPP), Top DownProfile(TDP) Algorithms were used",
      ],
      left: false,
      git: "https://github.com/srinukesari/Hand-to-Doc---NLP/tree/master",
    },
    {
      ind: 5,
      title: "On Stream Ballot",
      desc: [
        "local-voting system deployed using Wamp Server in localhost.",
        "HTML, CSS, JavaScript, PHP, MySQL",
      ],
      left: true,
      git: "https://github.com/srinukesari/On-Stream-Ballot",
    },
  ];
  return (
    <div id="project">
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <p className="section_title">
            <LightSpeedDiv position="right" text="Codes i wrote..." />
          </p>
        </Grid>
        <Grid container>
          {project.map((item, index) =>
            item.left == true ? (
              <Grid
                container
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                margin={"20px 40px"}
                padding={"40px 0px 0px 0px"}
                paddingBottom={index == project.length - 1 && "40px"}
                borderTop={index != 0 && "1px solid white"}
                borderBottom={index == project.length - 1 && "1px solid white"}>
                <Grid xs={12} sm={12} md={4} lg={3} className="project-title1">
                  <Fade left>{item.title}</Fade>
                  {item?.status && (
                    <Fade left>
                      <small>{item.status}</small>
                    </Fade>
                  )}
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={9} className="project-desc1">
                  <Fade right cascade>
                    <ul className="tech-list">
                      {item.desc.map((line) => (
                        <li>{line}</li>
                      ))}
                    </ul>
                  </Fade>
                  {item?.git && (
                    <a className="pro-icons" href={item.git}>
                      <GitLink />
                    </a>
                  )}
                  {item?.site && (
                    <a className="pro-icons" href={item.site}>
                      <SiteLink />
                    </a>
                  )}
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                direction={"row-reverse"}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
                margin={"20px 40px"}
                padding={"40px 0px 0px 0px"}
                borderTop="1px solid white"
                paddingBottom={index == project.length - 1 && "40px"}
                borderBottom={index == project.length - 1 && "1px solid white"}>
                <Grid xs={12} sm={12} md={4} lg={3} className="project-title2">
                  <Fade right>{item.title}</Fade>
                  {item?.status && (
                    <Fade left>
                      <small>{item.status}</small>
                    </Fade>
                  )}
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={9} className="project-desc2">
                  <Fade left cascade>
                    <ul className="tech-list">
                      {item.desc.map((line) => (
                        <li>{line}</li>
                      ))}
                    </ul>
                  </Fade>
                  {item?.git && (
                    <a className="pro-icons" href={item.git}>
                      <GitLink />
                    </a>
                  )}
                  {item?.site && (
                    <a className="pro-icons" href={item.site}>
                      <SiteLink />
                    </a>
                  )}
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
