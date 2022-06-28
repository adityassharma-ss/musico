import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutButton from "../Elements/About/AboutButton";
import AboutHeadline from "../Elements/About/AboutHeadline";
import AboutQuestionTitle from "../Elements/About/AboutQuestionTitle";
import AboutQuestionAnswer from "../Elements/About/AboutQuestionAnswer";
import AboutImg from "../Elements/About/AboutImg";
import { RiInstagramLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

function About({ uiState, setUiState }) {
    

    return (
        <div className={`about ${uiState.aboutShown ? "" : "about--hidden"}`}>
            <AboutHeader uiState={uiState} setUiState={setUiState} />
            <div className="about__wrapper">
                {/* Need our headline */}
                <div className="about-group">
                    <p>Hey There,</p>
                    <AboutHeadline content="Welcome to Musicoo!" />
                </div>
                {/* Need img */}
                <AboutImg />
                {/* Need Questions */}
                

                <hr />

                {/* Second Headline */}
                

                {/* Socials */}
                

                <hr />
                
            </div>
        </div>
    );
}

export default About;
