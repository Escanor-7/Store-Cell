import styled from "styled-components";

export const Footer = styled.div`
width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: ${(props) => props.theme.colors.darkBlack};
font-family: ${(props) => props.theme.fontFamilies.sansSerif};
margin-top: 5%;

@media (max-width: 1120px) {
    height: 55vh;
        }
        @media (max-width: 930px) {
    height: 30vh;
        }
`;

export const Container = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 520px) {
            width: 95%;
           height: 95%;
        }

        @media (max-width: 1120px) {
            border: none;
            box-shadow: none;
        }

`;

export const Contacts = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
border-right: 1px solid ${(props) => props.theme.colors.whiteGlobal};
@media (max-width: 1120px) {
            border: none;
            box-shadow: none;
        }

`;

export const Safety = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media (max-width: 1120px) {
    border-left: 1px solid ${(props) => props.theme.colors.whiteGlobal};
    border-right: 1px solid ${(props) => props.theme.colors.whiteGlobal};
        }


    img{
    width: 200px;

    @media (max-width: 1100px) {
            width: 150px
        }

        @media (max-width: 650px) {
            width: 120px
        }
        @media (max-width: 520px) {
            width: 90px
        }
}

`;

export const Terms = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
border-left: 1px solid ${(props) => props.theme.colors.whiteGlobal};
@media (max-width: 1120px) {
            border: none;
            box-shadow: none;
        }

`;
export const Title = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;


h2{
    color: ${(props) => props.theme.colors.whiteGlobal};
    font-weight: ${(props) => props.theme.weight.fontWeightBold};
    height: 20px;

    @media (max-width: 650px) {
            font-size: 20px;
        }

        @media (max-width: 520px) {
            font-size: 15px;
        }
}
i{
    color: ${(props) => props.theme.colors.whiteGlobal};
    margin-inline: 5px;
    font-size: 25px;

    @media (max-width: 650px) {
        font-size: 18px;
        }
        @media (max-width: 520px) {
            font-size: 15px;
        }
}
`;
export const SubTitle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

div{
    margin-bottom: 5px;
}

h3{
    color: ${(props) => props.theme.colors.whiteGlobal};
    font-weight: ${(props) => props.theme.weight.fontWeightBold};
    font-size: 22px;

    @media (max-width: 650px) {
            font-size: 17px;
        }
        @media (max-width: 520px) {
            font-size: 13px;
        }
}
h5{
    color: ${(props) => props.theme.colors.whiteGlobal};
    font-weight: ${(props) => props.theme.weight.fontWeightBold};

    @media (max-width: 870px) {
            font-size: 10px;
        }
        @media (max-width: 650px) {
            font-size: 8px;
        }
        @media (max-width: 520px) {
            font-size: 6px;
            font-weight: ${(props) => props.theme.weight.fontWeightRegular};
        }
}
i{
    color: ${(props) => props.theme.colors.whiteGlobal};
    margin-inline: 10px;
    font-size: 25px;

    @media (max-width: 650px) {
            font-size: 18px;
        }
        @media (max-width: 520px) {
            font-size: 15px;
        }
}

img{
    width: 200px;

    @media (max-width: 1100px) {
            width: 135px
        }

        @media (max-width: 650px) {
            width: 115px
        }
        @media (max-width: 520px) {
            width: 90px
        }
}
`;
export const Description = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

p{
    color: ${(props) => props.theme.colors.whiteGlobal};
    ${(props) => props.theme.weight.fontWeightBold};
    font-size: 20px;

    @media (max-width: 650px) {
            font-size: 12px;
        }
        @media (max-width: 520px) {
            font-size: 10px;
        }
}
`;