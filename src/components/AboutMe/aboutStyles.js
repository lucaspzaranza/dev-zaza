import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    font-family: inherit;
    margin: 0px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: start;

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
            margin-right: 10px;
            width: 25px;
        }

        @media ${narrowScreen} {
            font-size: 0.6em;
            margin-bottom: 10px;
        }
    }
`