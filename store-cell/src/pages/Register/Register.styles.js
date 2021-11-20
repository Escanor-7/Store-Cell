import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    right: 10px;
    background-color: transparent;
    top: 0px;
    left: 0px
`;
export const Popup = styled.div`
    width: 90%;
    height: 85%;
    position: relative;
    bottom: 100px;
    background-color: #202024;
    top: auto;
    bottom: auto;
    border-radius: 10px;
    
    
    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 50px;
        color: white;
        position: relative;
        bottom: 10%;
    }
`;
export const Cadastro = styled.div`
    width: 100%;
    position: relative;
    bottom: 10%;
`;

export const InputNome = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color:#1a1a1d;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;

    i{
        font-size: 25px;
        margin-left: 10px;
        color: white;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #e1e1e6;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }

`;
export const InputCpf = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color:#1a1a1d;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;

    i{
        font-size: 25px;
        margin-left: 10px;
        color: #e1e1e6;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #e1e1e6;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const InputEmail = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color:#1a1a1d;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;

    i{
        font-size: 25px;
        margin-left: 10px;
        color: white;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #e1e1e6;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }

`;
export const InputPassword = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color:#1a1a1d;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;

    i{
        font-size: 25px;
        margin-left: 10px;
        color: #e1e1e6;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #e1e1e6;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }
`;
export const InputCell = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color:#1a1a1d;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;

    i{
        font-size: 25px;
        margin-left: 10px;
        color: white;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #e1e1e6;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }

`;

export const ButtonCadastrar = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        width: 15%;
        height: 60px;
        background-color: #1a1a1d;
        color: #eff2f5;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        margin-inline: auto;
        position: relative;
        bottom: 8%;

        outline-width: 0;

        :hover{
            background-color: #121214;
            color: #eff3f5;
            cursor: pointer;
        }
`;
export const ButtonX = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        width: 3%;
        height: 35px;
        background-color: #1a1a1d;
        color: #eff2f5;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        margin-left: auto;
        margin-right: 5px;

        outline-width: 0;

        :hover{
            background-color: #121214;
            color: #eff3f5;
            cursor: pointer;
        }
`;