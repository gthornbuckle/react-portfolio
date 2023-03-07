import React from 'react';
import ProjectCard from '../ProjectCard';
import projects from "../../assets/projects.json";



function Projects(props) {
  return (
    <div className="container-fluid backgroundImg">
        <h1>Projects</h1>
        <div className="row">
            {projects.map(project =><ProjectCard 
            id={project.id}
            key={`${project.name}-${project.id}`}
            name={project.name}
            img={project.preview}
            link={project.deployedLink}
            repo={project.githubRepo}
            desc={project.description}/>)}
        </div>
    </div>
  );
}

export default Projects;