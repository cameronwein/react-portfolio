import React from "react";
import pdf from "../../assets/CWResume.pdf";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
    return (
        <section className="section">
            <h3 className="section-title">Resume </h3>
            <div className="section-content">
                <div>
                    <div className="download">
                        <span>Download My Resume</span>
                        <a href={pdf} download="Cameron Wein Resume.pdf">
                            <FaFileDownload size="25px" className="download-icon" />
                        </a>
                    </div>
                    <h3 className="resume-title">Front-end Proficiencies</h3>
                    <ul className="skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h3 className="resume-title">Back-end Proficiencies</h3>
                    <ul className="skills">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
      );
    }

export default Resume;