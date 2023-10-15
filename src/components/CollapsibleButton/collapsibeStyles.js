import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    height: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;

    .show {
        margin: 0% 7% 0% 7%;
        height: auto;
        opacity: 100%;
        transition: 1s;
        transform: translateY(10px);

        @media ${narrowScreen} {
            p {
                font-size: 0.7em;
            }
        }
    }
    
    .hide {
        margin: 0% 7% 0% 7%;
        opacity: 0%;
        transition: 1s;
    }
`

export const StyledCollapsibleButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: ${props => props.clicked === 'true' ? "85vw" : "35vw"};
    min-width: 320px;
    background-color: transparent;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.2em;
    transition: ease-in 0.2s;

    img {
        width: 30px;
    }

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media ${narrowScreen} {
            font-size: 1em;
            transition: ease-in 0.2s;
        }
    }

    &:hover {
        text-decoration: underline;
    }

    @media ${narrowScreen} {
        font-size: 1em;
        width: 83vw;
    }
`

export const Caret = styled.div`
    width: 15px;
    width: 0.5em;
    height: 1em;
    background-color: black;

    animation: blink-animation 1s steps(2, start) infinite;
    -webkit-animation: blink-animation 1s steps(2, start) infinite;

    @keyframes blink-animation {
        to {
        visibility: hidden;
        }
    }

    @-webkit-keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }

`