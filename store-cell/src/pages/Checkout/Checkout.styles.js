import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 200vh;
    background-color: #2b2b2c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Lucida sans;
    flex-direction: column;

    h1{
        color: white;
    }
`;
export const ContainerDescriçoes = styled.div`
    display: flex;
    width: 95%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h3{
        color: white;
        width: 100%;
        background-color: #202024;
        text-align: start;
        font-size: 22px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 50px;
        font-size: 30px;
        font-family: Lucida sans;
        background-color: green;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid #b0b0b0;

        :hover{
            border: 1px solid white;
            box-shadow: 0 0 7px -1px white;
            cursor: pointer;
        }
    }
`;
export const RevisaoDoPedido = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    span{
        color: white;
        margin-top: 10px;
        width: 500px;
    }
    a{
        color: goldenrod;
        margin-left: 0px;
        font-style: italic;
    }
`;
export const RevisaoTotal = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    span{
        color: white;
        text-align: center;
        font-size: 20px;
        font-weight: 900;
    }
    a{
        color: green;
        font-style: italic;
    }
`;
export const ContainerPagamento = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        color: white;
        width: 100%;
        background-color: #202024;
        text-align: start;
        font-size: 22px;
    }

    h2{
        color: #202024;
        background-color: white;
        border-radius: 10px;
        height: 30px;
    }
    button{
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    width: 35%;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    flex-wrap: wrap;
    margin-bottom: 10px;

    label {
        font-size: 20px;
        color: #eff3f5;
        margin: 0px 0px 10px 20px ;
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
export const ContainerOption = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
    
        select{
            width: 200px;
            height: 50px;
            margin-inline: 20px;
            border-radius: 10px;
        }
    
`;

