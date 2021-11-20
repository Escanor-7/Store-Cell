import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    right: 10px;
    background-color: #00000080;
    top: 0px;
    left: 0px
`;
export const Popup = styled.div`
    width: 90%;
    height: 85%;
    position: relative;
    bottom: 100px;
    background-color: #2b2b2c;
    top: auto;
    bottom: auto;
    border-radius: 10px;
    border: 1px solid white;
    box-shadow: 0 0 7px -1px white;
    
    
    h1{
        font-family: Lucida sans;
        font-size: 50px;
        color: white;
        position: relative;
        bottom: 11%;
    }
`;
export const Cadastro = styled.div`
    width: 100%;
    position: relative;
    bottom: 15%;
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;

    label {
        font-size: 20px;
        color: #eff3f5;
        margin: 0px 0px 10px 22px;
    }

    div {
        display: flex;
        width: 98%;

        i{
            position: relative;
            width: 0px;
            top: 15px;
            left: 25px;
            font-size: 25px;
            margin-left: 10px;
            color: #434242;
        }

        input{
            color: #434242;
            margin-left: 10px;
            margin-right: 10px;
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            background-color: white;
            border-radius: 5px;
            height: 50px;
            border: 1px solid #b0b0b0;
            padding-left: 50px;

            :hover{
                border: 1px solid #006272;
                box-shadow: 0 0 7px -1px #006272;
            }
        }
    }

`;

export const ButtonCadastrar = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: Lucida sans;
        width: 15%;
        height: 60px;
        background-color: green;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        margin-inline: auto;
        position: relative;
        bottom: 17%;

        outline-width: 0;

        :hover{
            border: 1px solid white;
            box-shadow: 0 0 7px -1px white;
            cursor: pointer;
        }
`;
export const ButtonX = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-family: Lucida sans;
        width: 3%;
        height: 35px;
        background-color: #1a1a1d;
        color: #eff2f5;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 10px;
        border: none;
        margin-left: auto;
        margin-right: 15px;

        :hover{
            border: 1px solid white;
            box-shadow: 0 0 7px -1px white;
            cursor: pointer;
        }
`;