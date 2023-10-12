import { useState } from "react";
import styled from "styled-components";
import file from '../../assets/svg/file-thinner.svg';
import LevelMeter from "../LevelMeter";
import { narrowScreen } from "../../globalStyles";

export const TechButtonContainer =  styled.button`
    flex-basis: 110px;
    width: 120px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    transition: ease-in 0.1s;
    //margin-left: 10px;

    @media ${narrowScreen} {
        width: 100px;
        height: 140px;
        flex-basis: 100px;
    }

    span { // tech file name
        position: absolute;
        height: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        font-family: "JetBrains Mono";
        font-weight: bold;
        margin-top: -15px;
    }

    &:hover {
        width: 185px;
        transition: ease-in 0.1s;

        @media ${narrowScreen} {
            width: 120px;            
        }
    }

    img { 
        position: absolute;

        &:first-child {
            width: inherit;
        }
    }

    .expandIcon {
        width: 85px;
        margin-bottom: 20px;
        transition: ease-in 0.1s;

        @media ${narrowScreen} {
            width: 70px;
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
        opacity: 0;
        transition: ease-in 0.1s;
    }

    .showContent {
        opacity: 100%;
        transition: ease-in 0.25s;
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

    return (
        <TechButtonContainer onPointerEnter={() => {if(!isMobile) expandAndShowTechDetails()}}
            onPointerLeave={() => {if(!isMobile) shrinkAndHideDetails()}}
            onClick={() => expanded ? shrinkAndHideDetails() : expandAndShowTechDetails()}
        >
            <img src={file}/>
            <img src={tech.icon} className={expanded? 'expandIcon' : 'hideIcon'}/>
            {
                !expanded && 
                (
                    <span>{tech.name}</span>
                )
            }
            <LevelMeter lvl={tech.level} expanded={expanded}/>
        </TechButtonContainer>
    )
}