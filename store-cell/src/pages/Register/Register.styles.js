import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    right: 10px;
    background-color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fontFamilies.sansSerif};
    top: 0px;
    left: 0px
`;
export const Popup = styled.div`
    width: 90%;
    height: 90%;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.whiteGlobal};;
    box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.whiteGlobal};;
    
    
    h1{
        font-size: 50px;
        color: ${(props) => props.theme.colors.darkBlack};
        position: relative;
        bottom: 10%;

        @media (max-width: 1080px) {
            bottom: 15%;
        }
    }
`;
export const Cadastro = styled.div`
    width: 100%;
    position: relative;
    bottom: 15%;
    display: block;
    justify-content: center;
    align-items: center;

    @media (max-width: 1080px) {
        bottom: 20%;
        }

`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;

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
            margin-bottom: 5px;
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

export const ContainerButton = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        margin-inline: 30px;
        margin-block: 10px;

        @media (max-width: 550px) {
            margin-inline: 15px;
        }
`;

export const ButtonCadastrar = styled.button`
        font-size: 30px;
        width: 25%;
        height: 60px;
        background-color: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};
        margin-top: 20px;

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 1080px) {
            width: 30%;
            font-size: 30px;
            position: relative;
            bottom: 25px;
        }

        @media (max-width: 800px) {
            width: 30%;
            font-size: 25px;
        }

        @media (max-width: 600px) {
            width: 50%;
            font-size: 25px;
        }
`;
export const ButtonX = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        width: 4%;
        height: 35px;
        background-color: ${(props) => props.theme.colors.whiteGlobal};
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: 700;
        border-radius: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 870px) {
            width: 5%;
            height: 35px;
        }
        @media (max-width: 700px) {
            width: 7%;
            height: 35px;
        }
        @media (max-width: 500px) {
            width: 9%;
            height: 35px;
        }
        @media (max-width: 400px) {
            width: 12%;
            height: 35px;
            margin-left: 30px;
        }
`;