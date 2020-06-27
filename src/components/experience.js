import React, { useState } from 'react';

import Header from './header';

import {SRLWrapper} from "./simple-react-lightbox-master/src/index";

import '../App.css';

import './experience.css';

import gui_1 from '../images/gui-1.png';
import gui_2 from '../images/gui-2.png';
import gui_3 from '../images/gui-3.gif';


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

const lightboxOptions = {
    height: "50%",
    top: "50%",
    settings: {
        // overlayColor: "rgb(25, 136, 124)",
        // autoplaySpeed: 1500,
        transitionSpeed: 900,
        disablePanzoom: true
    },
    buttons: {
        // backgroundColor: "#1b5245",
        // iconColor: "rgba(126, 172, 139, 0.8)",
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
        size: '60px',

    },
    caption: {
        showCaption: true,
        captionColor: "#a6cfa5",
        captionFontFamily: "Jaldi, sans-serif",
        // captionContainerPadding: "100px"
        // captionFontWeight: "300",
        // captionTextTransform: "uppercase",
    },
    thumbnails: {
      showThumbnails: true
      //   thumbnailsPosition: 'right'

    }
};

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPopup: false, currIndex: 0};
    }
    render() {
        let jobTitle = this.props.title.toUpperCase();
        let line;

        if(this.props.last){
            line = <div/>
        } else {
            line = <div className={"ex-line"}/>
        }

        let bullets = this.props.bullets.map(function(value, i){
            return (
                <li key={i}>{value}</li>
            );
        });

        let images;
        if(this.props.images !== undefined){
            images = this.props.images.map(function(value, i){
                return (<SmallImage image={value["src"]} alt={value["alt"]} key={i}/>)
            }, this)
        }

        return (
            <div className={"job"}>
                <div className={"workplace"}>
                    {this.props.place}
                </div>
                <div className={"graphic"}>
                    <div className="circle"/>
                    {line}
                </div>
                <div className={"jobDescription"}>
                    <span className={"jobTitle"}>{jobTitle}</span> <br/>
                    <div className={"date"}>{this.props.date}</div>
                    <ul className={"bullets"}>
                        {bullets}
                        <li key={this.props.bullets.length}>
                            <span className={"underlineExperience"}>Leveraged Knowledge</span> in {this.props.technologies}
                        </li>
                    </ul>

                    <div className={"ex-images"}>
                        <SRLWrapper options={lightboxOptions}>
                            {images}
                        </SRLWrapper>                    </div>
                </div>
            </div>
        )}
}

const Experience = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Header title={"EXPERIENCE"}/>
            <div className={"experience"}>
                <Job
                    place={"Creative Machines Lab @ Columbia University"}
                    title={"Research Assistant"}
                    date={"January - August, 2020"}
                    bullets={[
                        "Implemented a GUI for an opensource Ultrasound system to allow for user-friendly interactions with a 3D image.",
                        "Redesigned the OpenGL rendering pipeline speed from 20FPS to 60FPS to draw a 1 million point cloud by utilizing geometry shaders and GPU memory.",
                        "Established a connection between the rendering and data collection through the use of multi-threading for real-time interactions."
                    ]}
                    technologies={"C++, Git, OpenGL, GLSL"}
                    images={[
                        {"src": gui_1, "GUI demo 1": "Opening screen to view 3D ultrasound scans."},
                        {"src": gui_2, "GUI demo 2": "An example ultrasound scan with two GUI panels on the sides."},
                        {"src": gui_3, "GUI demo 3": "Demonstration of the markers users can use to measure distances and snap to scan objects."}
                        ]}
                    last={false}
                />

                <Job
                    place={"Amazon"}
                    title={"Software Development Engineer Intern"}
                    date={"May - August, 2019"}
                    bullets={[
                        "Implemented and shipped precautionary error handling technology to short-circuit outdated functions to the updated calls automatically.",
                        "Optimized data storage on AWS by over 30% by restructuring repeated object data storage.",
                        "Established method of remote connection to allow for easy debugging by creating a web server to make live requests"
                    ]}
                    technologies={"Git, Java, AWS"}
                    last={true}
                />
            </div>
        </div>
    );
});

export default Experience;