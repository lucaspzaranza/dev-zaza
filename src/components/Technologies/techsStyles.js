import { useEffect, useState } from "react";
import styled from "styled-components";
//import file from '../../assets/svg/file-thinner.svg';
import file from '../../assets/svg/file-thinner-white-bg.svg';
import LevelMeter from "../LevelMeter";
import { narrowScreen } from "../../globalStyles";

export const TechButtonContainer =  styled.button`
    border: none;
    background-color: transparent;
    //background-color: red;
    //margin-top: 20px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media ${narrowScreen} {
        width: 100px;
    }

    .file-with-icon { // file and icon
        position: absolute;
        //background-color: aqua;
        //flex-basis: 110px;
        width: ${props => props.expanded === "true" ? "185px" : "120px"};
        //height: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        //justify-content: flex-end;
        z-index: 0;
        
        transition: ease-in 0.1s;
    
        @media ${narrowScreen} {
            width: ${props => props.expanded === "true" ? "140px" : "100px"};
            //background-color: red;
            height: 140px;
            flex-basis: 100px;
            transition: ease-in 0.1s;
        }
    }

    .tech-name {
        //background-color: red;
        //margin-top: 50%;
        //height: 30px;
        height: 100%;
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: end;
        z-index: 20;
    }

    .level-meter {
        //background-color: green;
        //width: 100vw;
        //height: inherit;
    }

    span { // tech file name
        //background-color: white;
        z-index: 1;
        position: absolute;
        //height: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        font-family: "JetBrains Mono";
        font-weight: bold;
        //margin-top: -15px;
    }

    img { 
        position: absolute;

        &:first-child {
            width: inherit;
            //width: 120px;
        }
    }

    .expandIcon {
        width: 85px;
        margin-bottom: 20px;
        transition: ease-in 0.1s;

        @media ${narrowScreen} {
            width: 60px;
        }
    }

    .hideIcon {
        width: 70px;
        transition: ease-in 0.1s;
        opacity: 100%;

        @media ${narrowScreen} {
            width: 60px;
        }
    }

    .hideContent {
        //display: none;
        opacity: 0;
        //transform: scale(0);
        transform: translateY(10px);
        transition: ease-in 0.1s;
    }
    
    .showContent {
        opacity: 100%;
        transition: ease-in 0.2s;
    }
`

export const TechContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media ${narrowScreen} {
        width: 90vw;
    }
` 

export function TechButton({tech}) {
    const [expanded, setExpanded] = useState(false);

    const isMobile = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function expandAndShowTechDetails() {
        setExpanded(true);
    }

    function shrinkAndHideDetails() {
        setExpanded(false);
    }

    function toggleShowDetails() {
        if(expanded) {
            shrinkAndHideDetails()
        }
        else {
            expandAndShowTechDetails()
        }
    }

    return (
        <>
            <TechButtonContainer onPointerEnter={() => {if(!isMobile) expandAndShowTechDetails()}} expanded={expanded.toString()}
                onPointerLeave={() => {if(!isMobile) shrinkAndHideDetails()}}
                onClick={() => {if(isMobile) toggleShowDetails()}}>
                    
                <div className="file-with-icon">
                    <img src={file}/>
                    <img src={tech.icon} className={expanded? 'expandIcon' : 'hideIcon'}/>
                </div>

                <div className="tech-name">
                    {
                        !expanded && 
                        (
                            <span>{tech.name}</span>
                        )
                    }
                </div>
                <LevelMeter lvl={tech.level} expanded={expanded}/>
            </TechButtonContainer>
        </>
    )
}