import styled from "styled-components";

export default styled.button`
    height: 30px;
    width: 70px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: ease-out 0.1s;

    &:hover {
        color: gray;
        height: 40px;
        width: 80px;
        font-size: 70%;
        text-decoration: underline;
        transition: ease-out 0.1s;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
`;