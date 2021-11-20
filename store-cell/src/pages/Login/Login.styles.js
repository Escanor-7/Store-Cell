import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;

    h1{
        font-family: Lucida sans;
        font-size: 50px;
        color: #0a4c89;
;
    }

    h4{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
        bottom:60px;
        color: #0a4c89;
        position: relative;
        top: 73px;
    }
`;

export const Login = styled.div`
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    text-align: center;
    border-radius: 10px;
`;
export const ButtonEntrar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: Lucida sans;
        width: 25%;
        height: 60px;
        background-color: white;
        color: #0a4c89;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        margin-inline: auto;
        border: 1px solid #b0b0b0;

        outline-width: 0;

        :hover{
            background-color: green;
            color: #eff3f5;
            cursor: pointer;
        }
`;
export const ButtonCadastrar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        width: 25%;
        height: 60px;
        background-color: white;
        color: #0a4c89;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        margin-inline: auto;
        top: 55px;
        border: 1px solid #b0b0b0;
        

        outline-width: 0;

        :hover{
            background-color: green;
            color: #eff3f5;
            cursor: pointer;
        }
`;

export const InputEmail = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: gray;
    background-color: white;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #b0b0b0;

    :hover{
            border: 1px solid #006272;
            box-shadow: 0 0 7px -1px #006272;

        }

    i{
        font-size: 25px;
        margin-left: 10px;
        color: #434242;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #434242;
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
    background-color:white;
    border-radius: 5px;
    padding: 3px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #b0b0b0;

    :hover{
            border: 1px solid #006272;
            box-shadow: 0 0 7px -1px #006272;

        }


    i{
        font-size: 25px;
        margin-left: 10px;
        color: #434242;
    }
    input{
        font-size: 25px;
        background: transparent;
        width: 100%;
        outline-width: 0;
        color: #434242;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }
`;
export const PasswordEye = styled.div`
    i{
        font-size: 25px;
        margin-right: 10px;
        color: #434242;
    }
`;