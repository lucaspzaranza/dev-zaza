import styled from "styled-components";

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
`

export const ProgressBar = styled.div`
    width: 51px;
    display: flex;
    flex-direction: row;
    background-color: gray;
    padding: 4px;
`

export const ProgressBarUnit = styled.div`
    background-color: black;
    width: 15px;
    height: 15px;

    & + & {
        margin-left: 3px;
    }
`