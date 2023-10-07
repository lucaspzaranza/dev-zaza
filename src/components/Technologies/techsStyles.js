import { useState } from "react";
import styled from "styled-components";
import file from '../../assets/svg/file-thinner.svg';
import LevelMeter from "../LevelMeter";

export const TechButtonContainer =  styled.button`
    flex-basis: 25%;
    width: 120px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    transition: ease-in 0.1s;
    //margin-left: -20px;

    span { // tech file name
        position: absolute;
        //background-color: aqua;
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
    }

    .hideIcon {
        width: 70px;
        transition: ease-in 0.1s;
        opacity: 100%;
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
    width: 30vw;
    //height: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
` 

export function TechButton({tech}) {
    const [expanded, setExpanded] = useState(false);

    function expandAndShowTechDetails() {
        setExpanded(true);
    }

    function shrinkAndHideDetails() {
        setExpanded(false);
    }

    return (
        <TechButtonContainer onPointerEnter={expandAndShowTechDetails} 
            onPointerLeave={shrinkAndHideDetails}>
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