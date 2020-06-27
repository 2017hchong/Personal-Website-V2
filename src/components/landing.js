import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

// import '../App.css';

import './landing.css'
import styled, {keyframes} from "styled-components";

const toggleOn = keyframes`
  0% {
    color: rgba(255, 255, 250, 0.05);
    font-size: 70px;
    
    padding-left: 15px;
    padding-right: 15px;
  }
  50% {
    color: rgba(166, 28, 60, 0.55);
    font-size: 80px;
    
    padding-left: 0px;
    padding-right: 0px;
  }
  75% {
    color: rgba(255, 255, 250, 0.35);
    font-size: 80px;
    
    padding-left: 0px;
    padding-right: 0px;
  }
  100% {
    color: rgba(255, 255, 250, 0.05);
    font-size: 70px;
    
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const toggleOff = keyframes`
  0% {
    color: rgba(255, 255, 250, 0.05);
    font-size: 70px;
    
    padding-left: 15px;
    padding-right: 15px;
  }
  100% {
    color: rgba(255, 255, 250, 0.05);
    font-size: 70px;
    
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const TextHover = styled.div`
    display: inline-block;

    font-style: normal;
    font-weight: bold;
    width: 100%;
    font-size: 70px;
    line-height: 118px;
    color: rgba(255, 255, 250, 0.05);
    
    padding-left: 15px;
    padding-right: 15px;
   
    animation-name: ${props => props.toggle ? toggleOn : toggleOff};
    animation-duration: 2s;
    animation-timing-function: ease;
`;

class Word extends React.Component {
    constructor(props){
        super(props);

        this.state = {isHover: false, triggered: false};
    }

    onHover() {
        this.setState({isHover: true, triggered: !this.state.triggered});
        setTimeout(function(){
            this.setState({isHover: false});
        }.bind(this), 2000);
    }

    render() {
        let wordText = this.props.text.toUpperCase();
        let hover = <TextHover toggle={this.state.isHover}>{wordText}</TextHover>
        return (
            <div className={"noselect"}
                onMouseEnter={()=>this.onHover()}
                // onMouseLeave={()=>this.setState({isHover: false})}
            >
                {hover}
            </div>
        );
    }
}

const Landing = () => (
    <div className={"landing"}>
        <div className={"wordsContainer"}>
            <div className={"wordsRow"}>
                <Word text={"Self Starter"}/>
                <Word text={"creative"}/>
                <Word text={"community minded"}/>
                <Word text={"team player"}/>
            </div>
            <div className={"wordsRow"}>
                <Word text={"goal oriented"}/>
                <Word text={"fast learner"}/>
                <Word text={"Self Starter"}/>
                <Word text={"creative"}/>
            </div>
            <div className={"wordsRow"}>
                <Word text={"community minded"}/>
                <Word text={"team player"}/>
                <Word text={"goal oriented"}/>
                <Word text={"team player"}/>
            </div>
            <div className={"wordsRow"}>
                <Word text={"Self Starter"}/>
                <Word text={"creative"}/>
                <Word text={"community minded"}/>
                <Word text={"team player"}/>
            </div>
            <div className={"wordsRow"}>
                <Word text={"goal oriented"}/>
                <Word text={"fast learner"}/>
                <Word text={"Self Starter"}/>
                <Word text={"creative"}/>
            </div>
            <div className={"wordsRow"}>
                <Word text={"community minded"}/>
                <Word text={"team player"}/>
                <Word text={"fast learner"}/>
                <Word text={"goal oriented"}/>
            </div>
        </div>
        <Container className={"absolute"}>
            <div className={"title noselect"}>
                <div className={"hiText font-bold"}>Hi! I'm</div>
                <div className={"myName font-bold yellowColor"}>Hayun Chong</div>
                <div className={"description font-bold"}>
                    I’m a <span className={"whiteColor"}>software engineer</span><br/>
                    and <span className={"whiteColor"}>creator. </span>
                </div>
            </div>
        </Container>
    </div>
);

export default Landing;


