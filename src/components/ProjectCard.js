import React from "react";
import { motion } from "framer-motion";
import findmyband from "../assets/project-images/findmyband.png";
import readmegenerator from "../assets/project-images/readmegenerator.PNG";
import weatherdashboard from "../assets/project-images/weatherdashboard.png";
import codequiz from "../assets/project-images/codequiz.png";
import workdayscheduler from "../assets/project-images/workdayscheduler.png";
import passwordgenerator from "../assets/project-images/passwordgenerator.PNG";

const getProjectImg = project =>{ //Gets the correct image for each project card
    switch(project){
        case 'findmyband': return findmyband;
        case 'readmegenerator': return readmegenerator;
        case 'weatherdashboard': return weatherdashboard;
        case 'codequiz': return codequiz;
        case 'workdayscheduler': return workdayscheduler;
        case 'passwordgenerator': return passwordgenerator;
        default: return;
    }
}

function ProjectCard(props) {
    return (
        <div className="cardContainer col-sm-12 col-md-6 col-lg-6 align-items-stretch" whileHover={{ scale: 1.05 }}>
            <div className="card">
                <img src={getProjectImg(props.img)} alt={props.name} className="card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <div className="buttonTab">
                        <motion.a href={props.link} className="btn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>View Project</motion.a>
                        <motion.a href={props.repo} className="btn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>View Github Repo</motion.a>
                    </div>
                    <hr className="my-2"/>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProjectCard;