import styled from "styled-components";

export const Container = styled.div`
    background-color: #2c2b2b;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    img{
        width: 100px;
        overflow: hidden;
        border-radius: 35px;
    }
`;
export const Card = styled.div`
        max-width: 100%;
        overflow: hidden;
        background-color: transparent;
        margin-top: 13px;
        align-items: center;
`;

export const title = styled.div`
   width: 100%;
   height: 100%;

    h3{
        color: white;
        text-align: center;
        font-size: 20px;
    }
`;