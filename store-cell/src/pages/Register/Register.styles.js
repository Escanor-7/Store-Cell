import styled from "styled-components";
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
    text-align: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    margin-bottom: 30px;

    h1{
        font-size: 50px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 5px;

    label {
        font-size: 20px;
        color: ${(props) => props.theme.colors.darkBlack};
        margin: 0px 0px 2px 22px;
    }
    span {
        font-size: 14px;
        color: ${(props) => props.theme.colors.Red};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        margin: 0px 0px 0px 22px;
    }

    div {
        display: flex;
        width: 100%;

        i{
            position: relative;
            width: 0px;
            top: 12px;
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
export const ButtonCadastrar = styled.div`
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
        height: 60px;
        font-size: 30px;
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