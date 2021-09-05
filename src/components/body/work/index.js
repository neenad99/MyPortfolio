import React from 'react'
import "./work.css";
import Seperator from "../../common/seperator/index";
import {WorkData}  from '../../data/work';
import WorkCard from './work-card';

function Work() {
    const workData = WorkData;
    return (
        <div className="work">
            <Seperator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {workData.map((work)=>{
                    return(
                        <WorkCard item = {work}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
