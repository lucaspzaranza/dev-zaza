import styled from "styled-components";

export default styled.div` // Global
    margin: 0;
    font-family: "Arapey";
    font-size: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Arapey";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h3 {
        margin: 0;
    }
`