import styled from "styled-components";

const narrowWidth = '646px';

export const narrowScreen = `(max-width: ${narrowWidth})`;

export default styled.div` // Global
    margin: 0;
    font-family: "JetBrains Mono";
    //font-family: "Arapey";
    font-size: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    h1, h3 {
        font-weight: normal;
    }

    h1 {
        margin: 0px 0px 10px 0px;

        @media ${narrowScreen} {
            font-size: 8vw;
            margin-top: 30px;
            text-align: center;
        }
    }
    
    h3 {
        margin: 0;
        
        @media ${narrowScreen} {
            font-size: 5vw;
            text-align: center;
        }
    }
`

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const MenuDiv = styled.div`
    margin-top: 30px;
    height: ${props => props.$menuOpenCount === 0? "80vh" : "auto"};
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media ${narrowScreen} {
        margin-top: ${props => props.$menuOpenCount === 0? "50px" : "0px"};
        height: ${props => props.$menuOpenCount === 0? "60vh" : "auto"};
    }
`