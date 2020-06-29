import React, { useState } from 'react';
import {useRef} from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SimpleReactLightbox from './components/simple-react-lightbox-master/src/index.js';


// import resume from '../public/Hayun_Chong_Resume.pdf';
import About from './components/about';
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Landing from "./components/landing";

import HC from "./images/HC.png";

import './App.css';

class SectionLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHover: false, isClicked: false};
    }

    render() {
        let link;
        if(this.state.isHover) {
            link = <div className={"underline yellowColor"}>{this.props.name}</div>
        } else {
            link = <div className={"underline-background whiteColor"}>{this.props.name}</div>
        }
        return (
            <div className="font-16 font-bold navPages"
                 onMouseEnter={() => this.setState({isHover: true})}
                 onMouseLeave={() => this.setState({isHover: false})}
                 onClick={this.props.handleClick}
            >
                {link}
            </div>
        )}
}


class NavbarCustom extends React.Component {
    render() {
        return (
            <Navbar fixed="top" expand="md" className={"NavbarCustom noselect"}>
                {/*<Container>*/}
                <Navbar.Brand href="#" >
                    {/*<img*/}
                    {/*    alt=""*/}
                    {/*    src="/logo.svg"*/}
                    {/*    width="30"*/}
                    {/*    height="30"*/}
                    {/*    className="d-inline-block align-top"*/}
                    {/*/>{' '}*/}
                    <div className={"px-5 font-bold font-34 logo"}>
                        <img src={HC} alt={"Logo"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className={"ml-auto"}>
                        <SectionLink name={"About"} handleClick={()=>this.props.goTo(1)}/>
                        <SectionLink name={"Experience"} handleClick={()=>this.props.goTo(2)}/>
                        <SectionLink name={"Projects"} handleClick={()=>this.props.goTo(3)}/>
                        <SectionLink name={"Contact"}handleClick={()=>this.props.goTo(4)}/>
                    </Nav>
                </Navbar.Collapse>
                {/*</Container>*/}
            </Navbar>
        );
    }
}

const SideBar = () => (
  <div className={"sidebar rotate px-3"}>
      <a href={"Hayun_Chong_Resume.pdf"} className={"inline"}>resume</a>
      <span className="dot"/>
      <a href={"https://www.linkedin.com/in/hayun-chong/"} className={"inline"}>linkedin</a>
      <span className="dot"/>
      <a href={"mailto:hayun99@gmail.com"} className={"inline"}>hayun99@gmail.com</a>
      <span className={"inline line"}/>
  </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.experience = React.createRef();
        this.projects = React.createRef();
        this.contact = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this);
    }
    scrollToContent(content) {
        switch(content) {
            case 1:
                this.about.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 2:
                this.experience.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 3:
                this.projects.current.scrollIntoView({behavior:'smooth'});
                break;
            case 4:
                this.contact.current.scrollIntoView({behavior:'smooth'});
        }
    }
    render() {
        return (
            <div className={"App"}>
                <SimpleReactLightbox>
                    <NavbarCustom goTo={this.scrollToContent}/>
                    <Landing/>
                    <Container className="p-3">
                        <About ref={this.about}/>
                        <Experience ref={this.experience}/>
                        <Projects ref={this.projects}/>
                    </Container>
                    <Footer ref={this.contact}/>

                    <SideBar/>

                    <div className={"madeBy noselect"}>
                        <div className={"myNameBottom"}>
                            Designed & Built by Hayun Chong<br/>
                            2020
                        </div>
                    </div>
                </SimpleReactLightbox>
            </div>
        );
    }
}

// const App = () => (
//     <div className={"App"}>
//         <NavbarCustom/>
//         <Landing/>
//         <Container className="p-3">
//             <About/>
//             <Experience/>
//             <Projects/>
//         </Container>
//         <Footer/>
//
//         <SideBar/>
//
//         <div className={"madeBy noselect"}>
//             <div className={"myNameBottom"}>
//                 Designed & Built by Hayun Chong<br/>
//                 2020
//             </div>
//         </div>
//     </div>
// );

{/*<Jumbotron>*/}
{/*    <h1 className="header">Welcome To React-Bootstrap</h1>*/}
{/*    <ExampleToast>*/}
{/*        We now have Toasts*/}
{/*        <span role="img" aria-label="tada">*/}
{/*          🎉*/}
{/*        </span>*/}
{/*    </ExampleToast>*/}
{/*</Jumbotron>*/}

export default App;
