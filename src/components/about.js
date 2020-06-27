import React, { useState } from 'react';

import Header from './header';
import Button from './button';

import aboutMePic from '../images/aboutMe.png'
import resume from '../Hayun_Chong_Resume.pdf';
import '../App.css';

import './about.css'
const About = React.forwardRef((props, ref) => {
    return (
        <div className={"about"} ref={ref}>
            <Header title={"ABOUT ME"}></Header>
            <div className={"aboutInfo"}>
                <div className={"about-description"}>
                    Hello! My name is Hayun. I am a senior at <span className={"font-bold"}> Columbia University</span> studying <span className={"font-bold"}> computer science</span> on the vision and graphics track.
                    <br/><br/>
                    I enjoy creating interesting applications and always strive to solve difficult problems without losing sight of the users. I am particularly interested in the intersection of art and technology in fields like <span className={"font-bold"}> computer graphics, interactive user interfaces,</span> and <span className={"font-bold"}>3D user experience technologies.</span>
                    <br/><br/>
                    Outside of work and school, I can be found painting, playing guitar, and picking up new technologies, most recently dabbling with 3D animations in Blender.
                    <br/>
                    <div className={"left"}>
                        <Button name={"View Resume"} clickhandler={resume}/>
                    </div>
                </div>
                <div className={"inline photo"}>
                    <img src={aboutMePic} alt={"My Photo"}></img>
                </div>
            </div>
        </div>
    );
});


export default About;