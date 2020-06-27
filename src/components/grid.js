import React, { useState } from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectDescription from "./projectDescription";

import '../App.css';
import './projects.css'

import styled, {keyframes} from "styled-components";

import banana from '../images/bananaSnake.png'
import ray1 from '../images/rayTracer1.png'
import ray2 from '../images/rayTracer2.png'
import othello from '../images/othello.png'
import pana from '../images/panorama.png'

const Box = styled.div`
    background-color: rgba(57, 57, 170, 0.2);
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 430px;
    
    margin-bottom: 30px;
    
    border-radius: 10px;
    
    &:hover {
        background-color: rgba(57, 57, 170, 0.3);
    }
`;

class GridItem extends React.Component {
    render() {
        return (
            <Box>
                <ProjectDescription
                    title={this.props.title}
                    type={this.props.type}
                    description={this.props.description}
                    technologies={this.props.technologies}
                    gitlink={this.props.gitlink}
                    sitelink={this.props.sitelink}
                    images={this.props.images}
                    isNotFeatured={true}
                />
            </Box>
        );
    }
}

class Grid extends React.Component {
    render() {
        return (
            <div className={"gridBox"}>
                <Row>
                    <Col>
                        <GridItem
                            title={"Ray Tracer"}
                            description={["A Monte Carlo rendering Ray Tracer using global illumination and Russian Roulette termination algorithm."]}
                            technologies={"OpenGL, Java"}
                            images={[
                                {"image": ray1, "alt": "Ray Traced image with 100 Samples"},
                                {"image": ray2, "alt": "Ray Traced image with 100 Samples"}
                            ]}
                        />
                    </Col>
                    <Col>
                        <GridItem
                            title={"Panorama Creator"}
                            description={["Implemented program to take three images and create a panorama. Computed homographies, SIFT, and RANSAC function to blend images."]}
                            technologies={"python, OpenCV, numpy"}
                            images={[{
                                "image": pana, "alt": "Panaorama Example"
                            }]}
                        />
                    </Col>
                    <Col>
                        <GridItem
                            title={"Banana Snake"}
                            description={[
                                "Banana snake is a 3D snake game created using an LED matrix. " +
                                "Play the game using the joy stick and buttons, and take the game to a new level!"]}
                            technologies={"C++, arduino, 3D printing"}
                            images={[
                                {"image": banana, "alt": "Banana Snake: The 3D Snake Game"}
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GridItem
                            title={"Othello with AI"}
                            description={["Players play a game of Othello against a computer. AI implemented using alpha-beta pruning." +
                            "" +
                            ""]}
                            technologies={"Python, AI, Alpha-beta"}
                            images={[
                                {"image": othello, "alt": "Othello with AI"}
                            ]}
                            sitelink={"https://www.youtube.com/watch?time_continue=1&v=nS8Fo8B677M&feature=emb_logo"}
                        />
                    </Col>
                    <Col>
                        <GridItem
                            title={"Personal Website V1"}
                            description={["First iteration of my personal website hosted on Github."]}
                            technologies={"Javascript, HTML/CSS"}
                            gitlink={"https://github.com/2017hchong/2017hchong.github.io"}
                            sitelink={"https://2017hchong.github.io/index.html"}
                        />
                    </Col>
                    <Col>
                        <GridItem
                            title={"Video Speech Detection"}
                            description={[
                            "Created a program to detect when people are talking and generate automatic subtitles."]}
                            technologies={"python, OpenCV, Haar Cascades"}
                            sitelink={"https://www.youtube.com/watch?v=mLZVTrO144U&feature=emb_title"}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Grid;