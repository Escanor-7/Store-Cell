import styled from "styled-components";

export const Container = styled.div`
    background-color: #2c2b2b;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

    /* Foi assim que consegui acessar as setas do slider */
    div {
        button {
            &.slick-prev {
                left: 10px !important;
                z-index: 1;
            }
            &.slick-next {
                right: 10px !important;
                z-index: 1;
            }
        }
    }
`;
export const Card = styled.div`
    display: flex !important;
    flex-direction: column;
    width: 250px !important;
    height: 350px;
    margin: 10px 0px 10px 45px;
    background-color: white;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 8px;
`;
export const Description = styled.div`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

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
