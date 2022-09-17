import React, { Component, useState } from "react";
import "./All.css";
import { Grid } from "@mui/material";
import WorkCard from "./WorkCard";
import BfreeLogo from "./CompanyLogo/Bfree_logo.jpeg";
import Vlogo from "./CompanyLogo/virtusa_logo.jpeg";
import Slogo from "./CompanyLogo/SchemaxLog.jpeg";
import { Rotate, Zoom } from "react-reveal";
import { LightSpeedDiv } from "./AllStyles";

const Work = () => {
  const [index, setIndex] = useState(0);
  const worklist = [
    {
      id: 0,
      company: "Borderfree",
      title: "Full Stack Developer",
      period: "Nov 2021 - present",
      tech_stack: ["javascript", "react", "redux", "go", "aws"],
      tasks: [
        "Implemented Permissions Engine which restricts the access to events functionalities and user settings etc., in REVO 2.0.",
        "Devised Authentication of Admin through OTP and Magic Link in REVO 2.0.",
        "Optimised Policy-Permission API calls which reduces 2.5 seconds of runtime to 700-800 ms in REVO 1.0.",
        "Developed JWT token Verification which provides user- access to some resources of the product in REVO 1.0.",
        "Integrated Advertising Engine API calls and formulated the flow in REVO 2.0.",
        "Resolved Production level issues in HLS Layout in REVO 1.0.",
      ],
      logo: BfreeLogo,
    },
    {
      id: 0,
      company: "Virtusa",
      title: "Associate Engineer",
      period: "oct 2020 - oct 2021",
      tech_stack: ["talend", "pig", "hive", "hbase"],
      tasks: [
        "Created standard ,batch and streaming jobs in talend.",
        "Developed Talend Job for Notification of weekday of client",
        "Devised Talend job for asynchrous task of user",
      ],
      logo: Vlogo,
    },
    {
      company: "Schemax",
      title: "Assistant Engineer",
      period: " April 2019 - May 2019",
      tech_stack: ["react", "swagger", "vscode"],
      tasks: [
        "Inspecting API requests and responses using Swagger UI.",
        "Migrating database models using CLI.",
      ],
      logo: Slogo,
    },
  ];
  return (
    <div id="work">
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        paddingTop={"10%"}
        paddingLeft={"10%"}
        Direction="row"
        rowSpacing={2}
        columnSpacing={2}
        backgroundColor={"#17252A"}
        justifyContent="flex-start"
        alignItems="flex-start">
        <Grid xs={12} sm={12} md={12} lg={12}>
          <p className="skill-title">
            <LightSpeedDiv position="right" text="My Professional journey:" />
          </p>
        </Grid>
        {worklist.map((obj) => (
          <Grid xs={12} sm={8} md={6} lg={4} columnSpacing={2}>
            <Zoom>
              <WorkCard
                company={obj.company}
                title={obj.title}
                period={obj.period}
                tasks={obj.tasks}
                tech={obj.tech_stack}
                logo={obj.logo}
              />
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Work;
