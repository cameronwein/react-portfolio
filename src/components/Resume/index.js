import React from "react";
import pdf from "../../assets/CWResume.pdf";

const Resume = () => {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>
            <a href={pdf} download="Cameron Wein Resume.pdf">Download My Resume</a>
            <h3>Front-end Proficiencies</h3>
            <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul className="skills">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
      );
    }

export default Resume;