import styled from "styled-components";
import React from "react";
import git from "../images/git-logo.png";
import link from "../images/external-link.png";


import {SRLWrapper} from "./simple-react-lightbox-master/src/index";

const Logo = styled.div`
    
    height: 24px;
    margin-right: 18px;
    margin-top: 20px;
    
    max-width: 100%;
    
    display: inline-block;
    
    &:hover {
        height: 31px;
        margin-top: 14px;
        margin-right: 11px;
    }
`;

const LogoEmpty = styled.div`
    margin-top: 0px;
`;


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
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        size: '60px',

    },
    caption: {
        showCaption: true,
        // captionColor: "#a6cfa5",
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

const Image = styled.div`
    
    opacity: 0.6;
    
    &:hover {
        opacity: 0.8;
    }
`;

class ProjectDescription extends React.Component {
    render() {

        let textline = this.props.description.map(function(value, i){
            let returnDiv;
            if(i===0){
                returnDiv = <span key={i}>{value}</span>;
            } else {
                returnDiv = <span key={i}><br/><br/>{value}</span>;
            }
            return (
                returnDiv
            );
        });

        let images;
        if(this.props.images !== undefined) {
            images = this.props.images.map(function(value, i){
                return (
                    <div className={"flex-col"}>
                        <Image><img className={"flexGridImg"} src={value["image"]} alt={value["alt"]}/></Image>
                    </div>);
            })
        }

        let bottomClass = "bottomFloat";
        if(this.props.isNotFeatured !== undefined && this.props.isNotFeatured) {
            bottomClass = "bottomFloat-right";
        }

        return (
            <div className={"descriptionCont"}>
                <div className={"titleRow"}>
                    <span className={"projTitle"}>{this.props.title}</span>
                    <span className={"projType"}>{this.props.type}</span>
                </div>
                <div className={"projDescription"}>
                    {textline}
                </div>

                <div className={"projDesc-images"}>
                    <SRLWrapper options={lightboxOptions}> <div className={"flex-grid"}>{images}</div></SRLWrapper>
                </div>

                <div className={bottomClass}>
                    <div className={"logos"}>
                        {this.props.gitlink === undefined ? <LogoEmpty isPadded/> :
                            <Logo>
                                <a href={this.props.gitlink}>
                                    <img className="gitlogo" src={git} alt={"github link"}/>
                                </a>
                            </Logo>
                        }
                        {this.props.sitelink === undefined ? <LogoEmpty isPadded/> :
                            <Logo>
                                <a href={this.props.sitelink}>
                                    <img className="gitlogo" src={link} alt={"go to project"}/>
                                </a>
                            </Logo>
                        }
                    </div>
                    <div className={"projTech"}>
                        {this.props.technologies}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDescription;