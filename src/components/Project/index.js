import React from "react";
import { useState } from "react/cjs/react.development";
import { FaGithub } from "react-icons/fa";


const Project = () => {
    const [projects] = useState([
        {title: "Run Buddy",
        url: "https://cameronwein.github.io/run-buddy/",
        repo: "https://github.com/cameronwein/run-buddy",
        desc: "HTML & CSS",
        img: require(`../../assets/projects/run-buddy.PNG`),
        main: true
        },
    
        {title: "Food Festival",
        url: "https://cameronwein.github.io/food-festival/",
        repo: "https://github.com/cameronwein/food-festival",
        desc: "Progressive Web App",
        img: require(`../../assets/projects/food-festival.PNG`),
        main: false
        },
    
        {title: "Taskmaster Pro",
        url: "https://cameronwein.github.io/taskmaster-pro/",
        repo: "https://github.com/cameronwein/taskmaster-pro",
        desc: "Javascript",
        img: require(`../../assets/projects/taskmaster-pro.PNG`),
        main: false
        }
    ])

    return (
        <section id="sites-and-applications" className="section">
            <h3 className="section-title">Sites &amp; Apps</h3>
            <div className="section-content sites-grid-wrapper">
                <div className="sites-grid-container">
                        {projects.map((project) => (
                            <div key={project.title} className={`sites-grid-item ${project.main && `main-site`}`}>
                                <div className="site-img" style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="site-info">
                                        <div className="site-links">
                                            <a href={project.url}>
                                                <h3>{project.title}</h3>
                                            </a>
                                            <a className="repo-icon" href={project.repo}>
                                                <FaGithub size="25px" className="icon-github"/>
                                            </a>
                                        </div>
                                        <p>{project.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
         </section>
      );
    }

export default Project;