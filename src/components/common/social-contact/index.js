import React from 'react';
import "./social-contact.css";
import {socialData} from "../../data/social";

function SocialContact() {
    const data = socialData;
    return (
        <div className="social-contact">
            {data.map((item)=>{
                return (
                <a href={item.link}>
                    <div className="social-icon">
                        <img src={item.icon} alt="not loaded" className="social-img"></img>
                    </div>
                </a>
                )
            })}
        </div>
    )
}

export default SocialContact;