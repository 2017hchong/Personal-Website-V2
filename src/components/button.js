import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";

import '../App.css';
import './button.css'

const coolBoxKeyframes = keyframes`
  0% {
    width: 0px;
    background: #F3C435;
    opacity: 0.0;
  }
  100% {
    width: 100%;
    background: #F3C435;
    opacity: 0.7;
  }
`;

const HoverButton = styled.div`
    display: inline-block;
    background: green;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    animation-name: ${coolBoxKeyframes};
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

const colorTextKeyframes = keyframes`
  0% {
    color:  #F3C435;
  }
  100% {
    color: #FFFFFA;
  }
`;

const ColorText = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 100;
    color: #FFFFFA;
    
    animation-name: ${colorTextKeyframes};
    animation-duration: 1s;
    animation-timing-function: ease;
    
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 9px;
    padding-bottom: 9px;
`;

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isHover: false, isClicked: false};
    }

    mouseUp(clickhandler) {
        // this.setState({isClicked:false});
        window.location = clickhandler;
    }

    handleHoverEnter() {
        if(!this.isClicked)
            this.setState({isHover:true})
    }

    render() {
        let buttonClass = "button noselect";
        if(this.state.isClicked) {
            buttonClass = buttonClass + " filled";
        }

        return (
            <div className={buttonClass}
                 onMouseEnter={()=>this.handleHoverEnter()}
                 onMouseLeave={()=>this.setState({isHover:false, isClicked: false})}
                 onMouseDown={()=>this.setState({isClicked:true})}
                 onMouseUp={()=>this.mouseUp(this.props.clickhandler)}
            >
                {this.props.name}
                {this.state.isHover ? (
                    <HoverButton/>
                ): (<div/>)}
                {this.state.isHover ? (
                    <ColorText>{this.props.name}</ColorText>
                ): (<div/>)}
            </div>
        )}
}

export default Button;