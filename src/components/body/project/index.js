import React from 'react';
import "./project.css";
import {ProjectData} from '../../data/projects';
import ProjectCard  from './project-card';
import Seperator from '../../common/seperator/index';

function Project() {
    const data = ProjectData;
    return (
        <div className="project">
            <Seperator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>;
                })}
            </div>
        </div>
    )
}

export default Project;
