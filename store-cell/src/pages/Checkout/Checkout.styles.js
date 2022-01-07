import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 150vh;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: ${(props) =>props.theme.fontFamilies.sansSerif};
    flex-direction: column;

    h1{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }
`;
export const ContainerDescriçoes = styled.form`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h3{
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        width: 100%;
        background-color: ${(props) => props.theme.colors.darkBlack};
        text-align: start;
        font-size: 22px;
    }
`;
export const RevisaoDoPedido = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-block: 10px;

    @media (max-width: 770px) {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            flex-direction: column;
        }
`;
export const Descrition = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 100px;
    flex-direction: column;

    @media (max-width: 770px) {
        width: 100%;
        }

    span{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        width: 500px;
        text-align: start;

        @media (max-width: 500px) {
            font-size: 15px;
        }
    }
    a{
        color: ${(props) => props.theme.colors.DarkGoldenrod};
        font-style: italic;

        @media (max-width: 500px) {
            font-size: 15px;
        }
    }
`;
export const SubDescrition = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 20%;
    height: 100px;
    flex-direction: column;


    @media (max-width: 770px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 20px;
        }
        @media (max-width: 500px) {
        margin-top: 35px;
        }

    span{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        width: 500px;
        text-align: start;

        @media (max-width: 500px) {
            font-size: 15px;
        }
    }

    a{
        color: ${(props) => props.theme.colors.darkGreen};
        font-style: italic;

        @media (max-width: 500px) {
            font-size: 15px;
        }
    }
    
`;

export const Endereço = styled.div`
     margin-top: 20px;
`;


export const ContainerPagamento = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    h3{
        color: ${(props) => props.theme.colors.whiteGlobal};
        width: 100%;
        background-color: ${(props) => props.theme.colors.darkBlack};
        text-align: start;
        font-size: 22px;
    }
    
`;

export const RadiosContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    @media (max-width: 540px) {
        width: 100%;
        }
`;

export const InputButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;

    input{
        width: 50px;
        height: 25px;
    }
`;

export const ContainerCartaoDeCredito = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    button{
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    label {
        font-size: 20px;
        color: ${(props) => props.theme.colors.darkBlack};
        margin: 0px 0px 2px 22px;
    }

    span {
        font-size: 15px;
        color: ${(props) => props.theme.colors.Red};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        margin: 0px 0px 10px 22px;
    }

    div {
        display: flex;
        width: 100%;
        justify-content: center;

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
            color: ${(props) => props.theme.colors.darkBlack};
            margin-left: 10px;
            margin-right: 10px;
            width: 100%;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            background-color: ${(props) => props.theme.colors.whiteGlobal};
            border-radius: 5px;
            height: 45px;
            border: 1px solid ${(props) => props.theme.colors.darkBlack};
            padding-left: 50px;

            :hover{
                border: 1px solid ${(props) => props.theme.colors.royalBlue};
                box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            }
        }
    }
`;
export const ContainerOption = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
    
        select{
            width: 200px;
            height: 45px;
            margin-inline: 20px;
            border-radius: 10px;
        }
    
`;
export const Cartao = styled.div`
        margin-bottom: 20px;

        label{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        font-size: 30px;
        margin-left: 10px;

        @media (max-width: 500px) {
            font-size: 25px;
        }
        }

        i{
            font-size: 30px;

            @media (max-width: 500px) {
            font-size: 25px;
        }
        }
`;
export const Boleto = styled.div`
        margin-bottom: 0px;

        label{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        font-size: 30px;
        margin-left: 10px;

        @media (max-width: 500px) {
            font-size: 25px;
        }

        }

        i{
            font-size: 30px;

            @media (max-width: 500px) {
            font-size: 25px;
        }
        }
`;

export const ButtonBoleto = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 50px;
        font-size: 30px;
        font-family: Lucida sans;
        background-color: ${(props) => props.theme.colors.darkBlack};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};
        margin-left: 30px;

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }
        i{
            margin-right: 10px;
        }

        @media (max-width: 500px) {
            width: 250px;
            height: 50px;
            font-size: 20px;
        }
`;
export const ButtonFinalizar = styled.div`
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 50px;
        font-size: 30px;
        font-family: Lucida sans;
        background-color: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 500px) {
            width: 200px;
            font-size: 29px;
        }
        }
`;
