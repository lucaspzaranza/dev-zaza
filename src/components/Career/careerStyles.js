import styled from "styled-components";

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
`
export const JobContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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