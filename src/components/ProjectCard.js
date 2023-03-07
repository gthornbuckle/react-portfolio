import React from "react";
import { motion } from "framer-motion";
import findmyband from "../assets/project-images/find-my-band.png";
import readmegenerator from "../assets/project-images/readme-generator.png";
import weatherdashboard from "../assets/project-images/weather-dashboard.png";
import codequiz from "../assets/project-images/code-quiz.png";
import workdayscheduler from "../assets/project-images/work-day-scheduler.png";
import passwordgenerator from "../assets/project-images/password-generator.png";

function ProjectCard(props) {
    return (
        <div className="cardContainer col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={props.img} alt={props.name} className="card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <a href={props.link} className="btn btn-primary">View Project</a>
                    <p>Flip for more info</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProjectCard;