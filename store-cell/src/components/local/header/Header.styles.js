import styled from "styled-components";

export const Container = styled.div`
   background-color: #2b2b2b;
   align-items: center;
   justify-content: space-around;
   padding: 15px 1%;
   max-width: 100%;
   display: flex;
`;
export const CardImg = styled.img`
    width: 80px;
`;
export const StoreCell = styled.p`
    font-size: 50px;
    color: white;
    margin-block: 10px;
    display: flex;
    :hover{
        color: #b8b8b8;
    }
`;
export const searchInput = styled.input`
    width: 300px;
    padding: 10px 20px;
    border-radius: 10vh;
    border: none;
    outline: none;
    font-size: 15px;
    margin-bottom:25px;
`;
export const searchBtn = styled.button`
    border: none;
    outline: none;
    font-size: 20px;
    background-color: transparent;
    margin-left: -35px;
    color: black;
    transition: all .2s ease;
`;
export const ul = styled.ul`
    display: flex;
    margin-block: 30px;
    align-items: center;
`;
export const li = styled.li`
    list-style: none;
`;
export const a = styled.a`
    justify-content: space-around;
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    :hover{
        color: #b8b8b8;
    }
`;
export const biPerson = styled.i`
    font-size: 30px;
    color: white;
    :hover{
        color: #b8b8b8;
    }
`;
export const biBag = styled.i`
    font-size: 30px;
    color: white;
    padding-left: 20px;
    :hover{
        color: #b8b8b8;
    }
`;
export const login = styled.ul`
   margin-bottom:23px;
`;