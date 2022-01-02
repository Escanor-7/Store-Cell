import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-family: ${(props) =>props.theme.fontFamilies.sansSerif};
    background-color: ${(props) => props.theme.colors.whiteGlobal};

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 50px;
        font-size: 30px;
        background-color: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.whiteGlobal};
        font-weight: 700;
        border-radius: 5px;
        margin-top: 50px;
        border: none;
        border: 1px solid ${(props) => props.theme.colors.darkBlack};

        :hover{
            border: 1px solid ${(props) => props.theme.colors.royalBlue};
            box-shadow: 0 0 7px -1px ${(props) => props.theme.colors.royalBlue};
            cursor: pointer;
        }

        @media (max-width: 500px) {
            width: 300px;
            font-size: 29px;
            margin-top: 30px;
        }
    }

`;
export const title = styled.div`
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;

    i{
        font-size: 30px;
        margin-right: 10px;

        @media (max-width: 959px) {
            font-size: 25px;
        }
        @media (max-width: 520px) {
            font-size: 23px;
        }
    }

    h1{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};

        @media (max-width: 959px) {
            font-size: 25px;
        }
        @media (max-width: 959px) {
            font-size: 23px;
        }
    }
`;
export const Options = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px -1px ${(props) => props.theme.colors.darkBlack};

    h3{
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.weight.fontWeightBold};
        font-size: 20px;
        margin-left: 10px;

        @media (max-width: 959px) {
            font-size: 17px;
        }
    }
`;
export const Productor = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

`;
export const Descriptions = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    img{
        width: 150px;
        height: 110px;

        @media (max-width: 959px) {
        width: 130px;
        height: 90px;
        }
        @media (max-width: 820px) {
        width: 110px;
        height: 75px;
        }
        @media (max-width: 500px) {
        width: 90px;
        height: 65px;
        }
        
    }

    div{
       
        margin-inline: 2px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        
        span{
            margin-left: 20px;
            color: ${(props) => props.theme.colors.darkBlack};
            font-weight: ${(props) => props.theme.weight.fontWeightBold};
            font-size: 20px;

            @media (max-width: 959px) {
            font-size: 17px;
        }
        @media (max-width: 520px) {
            font-size: 15px;
        }

        }
        p{
            margin-left: 20px;
            color: ${(props) => props.theme.colors.darkBlack};
            font-weight: ${(props) => props.theme.weight.fontWeightBold};
            font-size: 20px;
            height: 0px;

            @media (max-width: 959px) {
            font-size: 17px;
        }
        @media (max-width: 520px) {
            font-size: 15px;
        }
        }
    }
`;
export const InforOrdenRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 820px) {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin-top: 30px;
        }
    
    div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 820px) {
            display: flex;
            height: 30px;
            justify-content: flex-start;
            align-items: center;
            margin-left: 10px;
        }


        p{
            color: ${(props) => props.theme.colors.darkBlack};
            font-weight: ${(props) => props.theme.weight.fontWeightSemiBold};
            font-size: 20px;

            @media (max-width: 959px) {
            font-size: 17px;
        }
        @media (max-width: 520px) {
            font-size: 15px;
        }

        }
    }
`;
export const Status = styled.div`
  display: flex;
  align-items: baseline;

  span {
    width: 12px;
    height: 12px;
    background-color: green;
    border-radius: 50%;
    margin: 0px 3px;
  }
`;
