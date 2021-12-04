import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #2b2b2b;
    text-align: center;

    h1{
        font-family: Lucida sans;
        font-size: 50px;
        color: white;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4{
        margin-top: 50px;
        font-family: Lucida sans;
        font-size: 17px;
        bottom:60px;
        color: white;
    }
`;

export const ButtonEntrar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family: Lucida sans;
        width: 25%;
        height: 60px;
        background-color: green;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid #b0b0b0;

        outline-width: 0;

        :hover{
            border: 1px solid white;
            box-shadow: 0 0 7px -1px white;
            cursor: pointer;
        }

        @media (max-width: 600px) {
            width: 50%;
            font-size: 16px;
        }
`;
export const ButtonCadastrar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-family:Lucida sans;
        width: 25%;
        height: 60px;
        background-color: green;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        border: 1px solid #b0b0b0;
        
        :hover{
            border: 1px solid white;
            box-shadow: 0 0 7px -1px white;
            cursor: pointer;
        }

        @media (max-width: 600px) {
            width: 50%;
            font-size: 16px;
        }
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

export const PasswordEye = styled.div`
    position: relative;
    right: 80px;
    width: 0px !important;
`;