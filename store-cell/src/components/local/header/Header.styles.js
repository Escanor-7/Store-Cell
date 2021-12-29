import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: space-around;
   max-width: 100%;
   background-color: ${(props) => props.theme.colors.darkBlack};
   font-family: ${(props) =>props.theme.fontFamilies.sansSerif};
   align-items: center;
   padding: 15px;

   @media(max-width:599px) {
        display: flex;
        justify-content: space-between;
        position: sticky;
        z-index: 5;
        top: 0px;
        width: 100%;
    }
`;

export const MobileOptionsList = styled.div`
    @media(min-width:1024px) {
        display: none;
    }
`;

export const CardImg = styled.img`
    width: 100px;
    height: 100px;

    @media(max-width:900px) {
        width: 80px;
        height: 80px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    
    p {
        margin-left: 5px;
        font-size: 30px;
        color: ${(props) => props.theme.colors.whiteGlobal};
        display: flex;
        :hover{
            color: ${(props) => props.theme.colors.lightGray};
        }
    }
    @media(max-width:1024px) {
        p{
            font-size: 20px; 
        }
    }

    @media(max-width:900px) {
       display: none;
    }
`;

export const SearchBar = styled.form`
    display: flex;
    width: 40%;

    @media(max-width:1024px) {
        width: 50%;
    }

    @media(max-width:599px) {
        width: 80%;
    }
`; 

export const searchInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    border-radius: 10vh;
    border: none;
    outline: none;
    font-size: 15px;

    @media(max-width:599px) {
        width: 70%;
    }
`;

export const searchBtn = styled.button`
    border: none;
    outline: none;
    font-size: 20px;
    background-color: transparent;
    margin-left: -35px;
    color: black;
    transition: all .2s ease;

    i {
        position: relative;
    }
`;

export const Item = styled.a`
    color: ${(props) => props.theme.colors.whiteGlobal};
    text-decoration: none;
    font-size: 20px;
    padding: 0px 5px;
    &:hover{
        color: ${(props) => props.theme.colors.lightGray};
    }

    @media(max-width:1024px) {
        font-size: 16px; 
    }

    @media(max-width:800px) {
        display: none;
    }
`;

export const BiPerson = styled.i`
    font-size: 30px;
    color: ${(props) => props.theme.colors.whiteGlobal};
    :hover{
        color: ${(props) => props.theme.colors.lightGray};
    }
`;

export const login = styled.div`
   display: flex;
   align-items: center;

   a {
        color: ${(props) => props.theme.colors.whiteGlobal};
        text-decoration: none;
        font-size: 20px;
        padding: 0px 5px;
        &:hover{
            color: ${(props) => props.theme.colors.lightGray};
        }
   }

   @media(max-width:599px) {
        display: none;
    }
`;

export const BiBag = styled.i`
    font-size: 30px;
    color: ${(props) => props.theme.colors.whiteGlobal};
    :hover{
        color: ${(props) => props.theme.colors.lightGray};
    }

    @media(max-width:599px) {
        display: none;
    }
`;