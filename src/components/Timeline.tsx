import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {

  // Function to download the resume
  const handleDownloadResume = () => {
    const fileUrl = "/Eng Resume.pdf"; // make sure this is in your public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Eng Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about me">
      <div className="items-container">
        <h1>About Me</h1>
        <p style={{ fontSize: "20px" }}>
          Hi, I'm Michael. I'm a <strong><span style={{ color: "#a122f5" }}>Mechanical Engineering</span></strong> student at Boston University passionate about innovating, creating, and improving designs of physical products/parts with a strong focus in manufacturing. I have hands-on experience in the <strong><span style={{ color: "#a122f5" }}>machine shop</span></strong>. I am also proficient in <strong><span style={{ color: "#a122f5" }}>SOLIDWORKS</span></strong>, where I develop and optimize 3D models. Outside of engineering, I enjoy playing sports, traveling, team-based video games, cooking, and working out.
        </p>

        {/* Download Resume Button */}
        <div style={{ marginTop: "50px" }}>
          <button
            onClick={handleDownloadResume}
            className="download-button"
            style={{
              backgroundColor: "#a122f5",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timeline;