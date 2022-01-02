import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamilies.sansSerif};

    h1{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
    }
`;

export const ContainerOptions = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid ${(props) => props.theme.colors.lightBrown};
    border-bottom: 1px solid ${(props) => props.theme.colors.lightBrown};

    @media (max-width: 800px) {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            align-content: flex-start;
        }

    
`;
export const Productor = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    width: 100%;
    margin-block: 20px;
   
    img{
        width: 150px;
        border-radius: 5px;
        
        @media (max-width: 550px) {
            width: 100px;
        }
    }
    span{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        font-size: 20px;
        margin-left: 15px;

        @media (max-width: 550px) {
            font-size: 17px;
        }
    }

`;
export const TheAmount = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    margin-block: 20px;
    
    @media (max-width: 800px) {
            position: relative;
            bottom: 75px;
            left: 80px;
        }
        @media (max-width: 550px) {
            position: relative;
            bottom: 50px;
            left: 15px;
        }
    button{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 15px;
        background-color: ${(props) => props.theme.colors.whiteGlobal};
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        border: 1px solid ${(props) => props.theme.colors.darkBlack};
        
        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
        }

        @media (max-width: 550px) {
            font-size: 12px;
        }
    }

    
`;

export const ButtonNumber = styled.button`
        font-size: 17px;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        border: 2px solid ${(props) => props.theme.colors.darkBlack};
        -webkit-appearance: none;
        -moz-appearance: none;
        text-overflow: '';

        @media (max-width: 550px) {
            width: 35px;
            height: 35px;
        }
        @media (max-width: 380px) {
            width: 35px;
            height: 35px;
        }
`;

export const Value = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-block: 20px;
    position: relative;
    bottom: 10px;
    

    @media (max-width: 800px) {
            position: relative;
            bottom: 85px;
            left: 90px;
        }
        @media (max-width: 550px) {
            position: relative;
            bottom: 65px;
            left: 15px;
        }

    p{
        font-size: 20px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};

        @media (max-width: 550px) {
            font-size: 18px;
        }
    }
    i{
        font-size: 22px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};

        :hover{
            color: ${(props) => props.theme.colors.lightBrown};
        }

        @media (max-width: 550px) {
            margin-left: 30px;
        }

        @media (max-width: 380px) {
            margin-left: 15px;
        }
    }    
`;

export const Total = styled.div`
    display: flex;
    width: 90%;
    height: 30%;
    justify-content: flex-end;
    align-items: center;

    p{
        font-size: 25px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};

        @media (max-width: 550px) {
            font-size: 20px;
        }
    }
`;
export const ButtonContinuar = styled.div`
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
            width: 150%;
            font-size: 29px;
            margin-bottom: 10px;
        }
        @media (max-width: 600px) {
            width: 120%;
            font-size: 27px;
        }
`;
