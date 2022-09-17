import React from "react";
import "./All.css";
import resume from "../resume.pdf";

const Resume = () => {
  return (
    <div class="center">
      <a href={resume}>
        <strong className="res" data-attr="View">
          View
        </strong>
        <strong data-attr="Resume">Resume</strong>
      </a>
    </div>
  );
};

export default Resume;
