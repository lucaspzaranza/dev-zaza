import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    position: absolute;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    font-family: "JetBrains Mono";
    font-weight: bold;
    z-index: 1;

    @media ${narrowScreen} {
        height: 100px;
    }
`

export const ProgressBar = styled.div`
    width: 51px;
    height: 15px;
    display: flex;
    flex-direction: row;
    background-color: gray;
    padding: 4px;

    @media ${narrowScreen} {
        width: 42px;
        height: 12px;
        padding: 3px;
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