import React, { useState } from 'react';

import '../App.css';
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <div className={"header"}>
                <span className={"yellowColor font-32 font-bold header-title"}>{this.props.title}</span>
                <div className={"header-line"}></div>
            </div>
        )}
}

export default Header;