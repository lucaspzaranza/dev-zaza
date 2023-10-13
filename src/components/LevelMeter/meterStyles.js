import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    font-family: "JetBrains Mono";
    font-weight: bold;
    //font-size: 1.2em;
    z-index: 1;

    @media ${narrowScreen} {
        height: 80%;
    }
`

export const ProgressBar = styled.div`
    width: 51px;
    display: flex;
    flex-direction: row;
    background-color: gray;
    padding: 4px;

    @media ${narrowScreen} {
        width: 43px;
    }
`

export const ProgressBarUnit = styled.div`
    background-color: black;
    width: 15px;
    height: 15px;

    @media ${narrowScreen} {
        width: 12px;
        height: 12px;
    }

    & + & {
        margin-left: 3px;
    }
`