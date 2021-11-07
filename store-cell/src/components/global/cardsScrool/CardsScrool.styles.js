import styled from "styled-components";

export const Container = styled.div`
    background-color: #2c2b2b;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

    &.slick-prev:before, .slick-next:before{
        color: black;
        
    }
    &.slick-prev{
      margin-left: -100px;
    }
    &.slick-arrow{
        font-size: 100px;
        width: 100px;
        &.slick-next:before{
            font-size: 100px;
        width: 100px;
        color: red;  
        }
        &.slick-next{
            font-size: 100px;
        width: 100px;
        color: red;  
        &.slick-next:before{
            font-size: 100px;
        width: 100px;
        color: red;  
        }
        }
    }

    &.button.slick-arrow.slick-next::before{
        font-size: 100px;
        width: 100px;
        color: red;
    }


`;
export const Card = styled.div`
    width: 100px;
    height: 320px;
    background-color: white;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 10px;
    justify-content: center;
    margin-left: 45px;

    img{
      padding: 0px;
      padding-top: 20px;
      margin-inline: 17%;
    }
`;
export const Description = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    color: black;
    
    h5{
        font-size: 18px;
        margin-inline: 10px;
        margin-top: 5px;
        :hover{
            color: #2c2b2b;
        }
    }
    p{
        font-size: 20px;
        margin-bottom: 30px;
        :hover{
            color: #2c2b2b;
        }
    }
    button{
        width: 120px;
        border: green solid 2px;
        background-color: #2c2b2b;
        font-size: 20px;
        color: white;
        border-radius: 10px;
        
        :hover{
            color: green;
        }
    }
`;
