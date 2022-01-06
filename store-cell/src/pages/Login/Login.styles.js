import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${(props) =>props.theme.fontFamilies.sansSerif};
`;

export const Login = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    text-align: center;

    h1{
        font-size: 50px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4{
        margin-top: 50px;
        font-size: 17px;
        bottom:60px;
        color: ${(props) => props.theme.colors.darkBlack};
    }
`;

export const ButtonEntrar = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        width: 25%;
        height: 60px;
        background-color: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};

        outline-width: 0;

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 800px) {
            width: 30%;
            font-size: 29px;
        }
        @media (max-width: 600px) {
            width: 50%;
            font-size: 27px;
        }
`;
export const ButtonCadastrar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        width: 300px;
        height: 60px;
        background-color: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        border-radius: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};
        
        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 800px) {
            width: 300px;
            font-size: 29px;
        }
        @media (max-width: 600px) {
            width: 180px;
            font-size: 27px;
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
        color: ${(props) => props.theme.colors.darkBlack};
        margin: 0px 0px 10px 22px;
    }
    span {
        font-size: 15px;
        color: ${(props) => props.theme.colors.Red};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
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
            color: ${(props) => props.theme.colors.darkGray};
        }

        input{
            color: ${(props) => props.theme.colors.darkGray};
            margin-left: 10px;
            margin-right: 10px;
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            background-color: ${(props) => props.theme.colors.whiteGlobal};
            border-radius: 5px;
            height: 50px;
            border: 1px solid ${(props) => props.theme.colors.darkBlack};
            padding-left: 50px;

            :hover{
                border: 1px solid ${(props) => props.theme.colors.royalBlue};
                box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            }
        }
    }

`;

export const PasswordEye = styled.div`
    position: relative;
    right: 80px;
    width: 0px !important;
`;