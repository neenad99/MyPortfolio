import React from 'react';
import "./body.css";
import About from "./about/index";
import Project from "./project/index";
import Skill from "./skill/index";
import Work from "./work/index";
import Contact from "./contact/index";

function Body() {
    return (
    <div className="body">
        <section id="about">
            <About />
        </section>
        <section id="project">
            <Project />
        </section>
        <section id="skill">
            <Skill />
        </section>
        <section id="work">
            <Work />
        </section>
        <section id="contact">
            <Contact />
        </section>
    </div>
    )
}

export default Body;
