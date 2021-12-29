import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: ${(props) => props.theme.fontFamilies.montserratRegular};
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    border-radius: 4px;
    margin: 13px 0px 20px 0px;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45); 
        box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45);
    }

    img{
        width: 100px;
        overflow: hidden;
        border-radius: 35px;
    }

    h3{
        color: ${(props) => props.theme.colors.darkGray};
        text-align: center;
        font-size: 20px;
        margin: 3px;
    }

    @media(max-width: 599px) {
        img{
            width: 80px;
        }

        h3 {
            font-size: 18px;
        }
    }
`;