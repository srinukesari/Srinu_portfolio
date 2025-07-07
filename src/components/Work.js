import React from "react";
import "./All.css";
import { Grid } from "@mui/material";
import WorkCard from "./WorkCard";
import Techmojologo from "./CompanyLogo/Techmojo_logo.jpeg";
import BClogo from "./CompanyLogo/BClogo.jpeg";
import BfreeLogo from "./CompanyLogo/Bfree_logo.jpeg";
import Vlogo from "./CompanyLogo/virtusa_logo.jpeg";
import Slogo from "./CompanyLogo/SchemaxLog.jpeg";
import Concordia from "./CompanyLogo/Concordia_logo.png";
import { Zoom } from "react-reveal";
import { LightSpeedDiv } from "./AllStyles";

const Work = () => {
  const worklist = [
    {
      id: 0,
      company: "Concordia",
      title: "Teaching Assistant",
      period: "Jan 2025 - present",
      tech_stack: ["COMP353", "COMP348", "COMP249", "SOEN341"],
      tasks: [
        "Conducted tutorials to explain complex topics to students, reinforcing their understanding of the course material.",
        "Led POD sessions to address students' doubts and provide additional support based on the professor’s lectures",
      ],
      logo: Concordia,
    },
    {
      id: 0,
      company: "Techmojo",
      title: "Member of Technical Staff",
      period: "Jan 2024 - April 2024",
      tech_stack: ["Golang", "javascript", "React", "GCP"],
      tasks: [
        "Spearheaded a tech initiative by introducing unit testing for the OfferVal microservice in Golang, achieving 92% test coverage while maintaining a threshold of 80%. This involved selecting appropriate testing frameworks and mock packages to ensure comprehensive testing coverage",
        "Optimised logging for multiple microservices and enhanced the internal cache structure, which was initially complex and challenging to comprehend.",
        "Devised a solution to address the duplication of gRPC proto-generated files, which was leading to conflicting sources of truth.Led the implementation of gateways, serving as a crucial interface for managing requests from the Sojern portal.",
      ],
      logo: Techmojologo,
    },
    {
      id: 0,
      company: "Beautifulcode",
      title: "Senior Software Engineer",
      period: "Feb 2023 - Jan 2024",
      tech_stack: ["javascript", "React", "Golang", "GCP"],
      tasks: [
        "As a part of CUE(Campaign Update Engine) team, our primary responsibility has been to design, develop, and deploy micro-services that facilitate the seamless launching of campaigns in various DSP’s(demand side platforms) and updating those campaigns using various services.",
        "Developed and implemented gRPC endpoints for the Sojern Portal 3.0, contributing to efficient data display. Managed the flow to ensure optimal performance and user experience.",
        "Designed cron scheduler jobs responsible for handling the periodic updating and deletion of records, particularly focusing on efficiently managing soft-deleted data which results in cleaning up 90% deleted/un-used campaigns at DSP’s side.",
        "Led the implementation of gateways, serving as a crucial interface for managing requests from the Sojern portal.",
      ],
      logo: BClogo,
    },
    {
      id: 0,
      company: "Borderfree",
      title: "Product Engineer",
      period: "Nov 2021 - Feb 2023",
      tech_stack: ["javascript", "React", "Golang", "AWS"],
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
            <LightSpeedDiv position="right" text="My Journey:" />
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
