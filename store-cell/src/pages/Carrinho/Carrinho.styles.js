import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamilies.sansSerif};

    h1{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }
`;
export const ContainerItens = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 95%;
    height: 80vh;
    margin: 0px;
    padding: 0px;
    
`;
export const ContainerOpcoes = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    
`;
export const OpcoesQuantidade = styled.p`
    width: 90%;
       p{
        color: ${(props) => props.theme.colors.whiteGlobal};
        width: 100%;
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        text-align: center;
        font-size: 20px;
        background-color: ${(props) => props.theme.colors.darkBlack};
        padding-left: 190px;
       }
`;
export const OpcoesPreco = styled.p`
    width: 20%;
        p{
        color: ${(props) => props.theme.colors.whiteGlobal};
        width: 100%;
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        text-align: center;
        font-size: 20px;
        background-color: ${(props) => props.theme.colors.darkBlack};
        }
`;
export const ContainerProductor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
   img{
    width: 150px;
    height: 100px;
    border-radius: 10px;
   }
   p{
       color: ${(props) => props.theme.colors.darkBlack};
       font-weight: ${(props) => props.theme.weight.fontWeightSemiBold};
       font-size: 20px;
       margin-left: 10px;
   }
   a{
       margin-left: 20px;
       color: ${(props) => props.theme.colors.darkBlack};
       position: relative;
       top: 10px;
       font-size: 15px;
   }
    
`;
export const ContainerDropdown = styled.div`
    display: flex;
    height: 0px;
    justify-content: center;
    align-items: flex-start;
    margin-left: 75px;
    
    select{
        width: 50px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid ${(props) => props.theme.colors.darkBlack};
        
    }
    a{
        margin-left: 0px;
    }
`;
export const ContainerValor = styled.div`
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: flex-start;
    margin-left: 290px;
    p{
        color: ${(props) => props.theme.colors.darkBlack};
    }
`;
export const ContainerContinuar = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        color: ${(props) => props.theme.colors.darkBlack};
        font-size: 30px;
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }

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
        border-radius: 5px;
        margin-top: 5px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};

        :hover{
            border: 1px solid ${(props) => props.theme.colors.darkBlack};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.darkBlack};
            cursor: pointer;
        }
    }
`;
