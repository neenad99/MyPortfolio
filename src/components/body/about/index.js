import React from 'react'
import SocialContact from "../../common/social-contact/index";
import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There , I am
                    <br/><span className="about-info-name"> Neenad Kambli </span>
                    <br/> I love to build 
                </div>
                <div className="about-photo">
                    <img src={require("../../../assets/Coding-bro.png").default} className="picture" alt="failed to load"></img>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
