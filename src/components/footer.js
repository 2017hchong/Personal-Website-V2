import React, { useState } from 'react';

import Button from './button';
import Container from 'react-bootstrap/Container';

import '../App.css';

import './footer.css'

const Contact = () => (
    <div className={"footer-contact"}>
        <div className={"footer-title"}>GET IN TOUCH</div>
        <div className={"footer-description"}>
            I am looking to join an engineering team <span className={"font-bold"}>full time as a software engineer</span> following graduation in May 2021 to work on impactful projects with passionate people.
            <br/><br/>
            If you have any questions or just want to say hi, feel free to get in touch below!
        </div>
        <div className={"footer-button"}>
            <Button name={"Say Hi!"} clickhandler={"mailto:hayun99@gmail.com"}></Button>
        </div>
    </div>
);

const Footer = React.forwardRef((props, ref) => {
    return (
        <div className={"footer"} ref={ref}>
            <Container>
                <Contact/>
            </Container>
        </div>
    );
});

export default Footer;