import styled from "styled-components";
import { narrowScreen } from "../../globalStyles";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px -5px 30px -5px;
    padding: 0px 10px 20px 10px;
    border: solid 2px;
    box-shadow: 10px 10px #333;
    
    .project-title {
        margin: 10px 0px 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h4, h5 {
            display: flex;
            width: max-content;
            justify-content: center;
            margin: inherit;
            padding: 10px;
            border: solid 2px;
        }
    }

    @media ${narrowScreen} {
        img {
            width: 100vw;
        }
    }

    .project-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        :hover {
            background-color: gray;
            transition: ease-in 0.2s;
        }
        
        a {
            border: solid 2px;
            padding: 15px;
            color: black;
            box-shadow: 5px 5px #333;
            transition: ease-in 0.2s;
        }

        a + a {
            margin-left: 20px;
        }
    }
`