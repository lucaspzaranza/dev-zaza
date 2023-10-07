import styled from "styled-components";

export default styled.button`
    height: 30px;
    width: 70px;
    width: 95px;
    background-color: transparent;
    //border: none;
    cursor: pointer;
    font-family: inherit;
    transition: ease-out 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: gray;
        height: 40px;
        width: 110px;
        font-size: 70%;
        text-decoration: underline;
        transition: ease-out 0.1s;
    }

    img {
        margin-left: -5px;
        width: 30px;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
`;