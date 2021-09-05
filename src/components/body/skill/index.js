import React from 'react'
import Seperator from '../../common/seperator/index';
import { SkillsData} from '../../data/skills';
import SkillCard from './skill-card';
import "./skill.css";

function Skill() {
    const skillData = SkillsData
    return (
        <div className="skills">
            <Seperator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {skillData.map((skill)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{skill.type}</label>
                            <div className="skills-list">
                                {skill.title.map((title)=>{
                                    return (
                                        <SkillCard skill={title}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill;
