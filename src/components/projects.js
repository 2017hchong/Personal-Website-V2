import React, { useState } from 'react';

import Header from './header';

import '../App.css';

import './projects.css'

// import styled, {keyframes} from "styled-components";
import Grid from "./grid.js";
import ProjectDescription from "./projectDescription";

import caret from '../images/caret.png'

import project1_1 from '../images/rubiks.gif'
import project1_2 from '../images/project1-2.png'
import project1_3 from '../images/project1-3.png'

import covid1 from '../images/covid1.png'
import covid2 from '../images/covid2.png'
import covid3 from '../images/covid3.png'
import covid4 from '../images/covid4.png'

import project3_1 from '../images/project3-1.png'
import project3_2 from '../images/project3-2.png'
import project3_3 from '../images/project3-3.png'

class SmallImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHover: false}
    }
    render() {
        let classes = "img otherImgPad";
        if(this.state.isHover){
            classes = classes + " otherImgHover";
        }
        return (
            <img className={classes}
                 src={this.props.image}
                 alt={this.props.alt}
                 onMouseEnter={() => this.setState({isHover: true})}
                 onMouseLeave={() => this.setState({isHover: false})}
                 onClick={this.props.onClickFunction}
            />
        );
    }
}


class ProjectImages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {mainImgKey: 0, isCaretHover: false};
    }
    nextPic() {
        if(this.state.mainImgKey === this.props.images.length-1){
            this.setState({mainImgKey: 0});
        } else{
            this.setState({mainImgKey: this.state.mainImgKey + 1});
        }
    }
    setPic(i) {
        this.setState({mainImgKey: i});
    }
    render() {
        let images = this.props.images.map(function(value, i){
            let altName = ""+ this.props.title + {i};
            return (
                <SmallImage alt={altName} key={i} image={value} onClickFunction={() => this.setPic(i)}/>
            );
        }, this);

        let main =
            <img className="imgMain shadow" src={this.props.images[this.state.mainImgKey]} alt={this.props.title}/>;

        let caretComp;
        if(this.state.isCaretHover) {
            caretComp = <img className={"caret caret-hover"} src={caret} alt={"caret"}
                             onMouseEnter={() => this.setState({isCaretHover: true})}
                             onMouseLeave={() => this.setState({isCaretHover: false})}
                             onClick={()=>this.nextPic()}
            />;
        } else {
            caretComp = <img className={"caret caret-unhover"} src={caret} alt={"caret"}
                             onMouseEnter={() => this.setState({isCaretHover: true})}
                             onMouseLeave={() => this.setState({isCaretHover: false})}
                             onClick={()=>this.nextPic()}
            />;
        }

        return (
            <div className={"imgHeight"}>
                <div className={"mainImg"}>
                    {main}
                    {caretComp}
                    {/*wrapper searchDiv ${this.state.something}*/}
                </div>
                <div className={"otherImgs"}>
                    {images}
                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    render() {
        let desc = <ProjectDescription
            title={this.props.title}
            type={this.props.type}
            description={this.props.description}
            technologies={this.props.technologies}
            gitlink={this.props.gitlink}
            sitelink={this.props.sitelink}
        />;
        let project;
        if(this.props.imageLeft){
            project =
                <div className={"projectCont"}>
                    <div className={"imageCont imagePadRight"}>
                        <ProjectImages images={this.props.images} title={this.props.title}/>
                    </div>
                    {/*<div className={"imagePad"}/>*/}
                    <div className={"width45"}>{desc}</div>
                </div>
        } else {
            project =
                <div className={"projectCont"}>
                    <div className={"width45"}>{desc}</div>
                    {/*<div className={"imagePad"}/>*/}
                    <div className={"imageCont imagePadLeft"}>
                        <ProjectImages images={this.props.images} title={this.props.title}/>
                    </div>
                </div>
        }

        return (
            project
        )}
}

const Projects = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Header title={"MY PROJECTS"}/>
            <div className={"experience"}>
                <Project
                    title={"Rubiks Cube Interactive"}
                    type={"Interactive Website"}
                    description={[
                        "Developed an interactive graphics website where users can interactively learn to solve a 2x2 Rubik's Cube." +
                        " Created 3D interactions and animations for the Rubik's Cube where users can move the camera and rotate sides of the cube with " +
                        "a mouse and the keyboard. ",
                        "Click the link below to try it yourself!"
                    ]}
                    technologies={"Python, Flask, Heroku, JavaScript, THREE.js, jQuery, HTML/CSS, GIT"}
                    images={[project1_1, project1_2, project1_3]}
                    gitlink={"https://github.com/2017hchong/Rubiks-Cube-Interactive"}
                    sitelink={"https://rubiks-interactive.herokuapp.com/"}
                    imageLeft={true}
                />
                <Project
                    title={"COVID-19 Chest X-ray Classifier"}
                    type={"Multiclass CNN"}
                    description={[
                        "Created a multi-class classifier to diagnose COVID-19 and pneumonia cases from chest X-rays using a CNN. Although I experiemented with " +
                        "transfer learning and various CNN architectures, the best accuracy was achieved with my own CNN."
                    ]}
                    technologies={"Python, Numpy, OpenCV"}
                    images={[covid1, covid2, covid3, covid4]}
                    imageLeft={false}
                />
                <Project
                    title={"Synesthesia Spectrum"}
                    type={"3D Multiplayer Game"}
                    description={[
                        "Synesthesia Spectrum is a two-player gravity based platformer game created using Unity, C#, and Blender." +
                        "Players start in the same level and race to reach the end, interacting with each other along the way by controlling gravity.",
                        "Created with a team of students through the Columbia University Game Development club."
                    ]}
                    technologies={"Unity, C#, Blender"}
                    images={[project3_1, project3_2, project3_3]}
                    gitlink={"https://github.com/Yiwen-Gao/synesthesia-spectrum"}
                    sitelink={"https://cugamedev.itch.io/synesthesia-spectrum"}
                    imageLeft={true}
                />
                <Grid></Grid>
            </div>
        </div>
    );
});

export default Projects;