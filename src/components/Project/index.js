import React from "react";
import { useState } from "react/cjs/react.development";
import { FaGithub } from "react-icons/fa";


const Project = () => {
    const [projects] = useState([
        {title: "run-buddy",
        url: "https://cameronwein.github.io/run-buddy/",
        repo: "https://github.com/cameronwein/run-buddy",
        desc: "HTML & CSS",
        img: require(`../../assets/projects/run-buddy.PNG`)
        },
    
        {title: "food-festival",
        url: "https://cameronwein.github.io/food-festival/",
        repo: "https://github.com/cameronwein/food-festival",
        desc: "Progressive Web App",
        img: require(`../../assets/projects/food-festival.PNG`)
        },
    
        {title: "taskmaster-pro",
        url: "https://cameronwein.github.io/taskmaster-pro/",
        repo: "https://github.com/cameronwein/taskmaster-pro",
        desc: "Javascript",
        img: require(`../../assets/projects/taskmaster-pro.PNG`)
        }
    ])

    return (
        <section className="my-5">
            <h1 id="project">Portfolio</h1>
            {projects.map((project) => (
                <div key={project.title} 
                     style={{ backgroundImage: `url(${project.img})` }}>
                    <a href={project.url}>
                        <h3>{project.title}</h3>
                    </a>
                    <a href={project.repo}>
                        <FaGithub size="40px" className="icon-github"/>
                    </a>
                    <p>{project.desc}</p>
                </div>
            ))}
         </section>
      );
    }

export default Project;