import React from "react";
import "./All.css";
import resume from "../Kesari_SoftwareEngineer.pdf";

const Resume = () => {
  return (
    <div className="center">
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <strong className="res" data-attr="View">
          View
        </strong>
        <strong data-attr="Resume">Resume</strong>
      </a>
    </div>
  );
};

export default Resume;
