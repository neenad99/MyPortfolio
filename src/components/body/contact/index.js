import React from 'react'
import Seperator from "../../common/seperator/index";
import SocialContact from "../../common/social-contact/index";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Connect With Me By Clicking Below Links</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require("../../../assets/resume.pdf").default}>
                    <i class="fi-rr-cloud-download download-icon"></i> Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
