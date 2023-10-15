import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h3 {
        display: flex;
        flex-direction: row;
        margin-top: 0;
        
        img {
            width: 35px;
            margin-right: 10px;
        }
    }
    
    h3, span {
        @media ${narrowScreen} {
            font-size: 0.7em;
        }
    }
`
export const JobContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 10px #333;

    border: solid 2px;
    padding: 20px;
    margin: 0px -5px 30px -5px;

    span {
        display: flex;
        flex: row;
        align-items: center;
        justify-content: space-between;

        img {
            width: 35px;
            margin-right: 10px;
        }
    }
`