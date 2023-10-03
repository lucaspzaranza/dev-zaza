import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    height: 100%;
    margin-top: 20px;

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
    width: 98vw;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.2em;
    transition: ease-in 0.1s;

    &:hover {
        color: gray;
        font-size: 1.5em;
        transition: ease-out 0.1s;
        text-decoration: underline;
    }

    @media ${narrowScreen} {
        font-size: 1em;

        &:hover {
            font-size: 1.2em;
        }
    }
`