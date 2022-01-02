import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    width: 100%;
    font-family: ${(props) => props.theme.fontFamilies.montserratRegular};

    /* Foi assim que consegui acessar as setas do slider */
    div {
        display: flex;
        width: 100%;
        justify-content: space-around;
        button {
            width: 100px;
            &.slick-prev {
                left: -40px !important;
                z-index: 1;
                width: 30px !important;
                margin-left: 40px;
                &.slick-prev::before {
                    font-size: 25px;
                    color: ${(props) => props.theme.colors.darkBlack}
                }
            }
            &.slick-next {
                z-index: 1px;
                right: -40px !important;
                width: 30px !important;
                margin-right: 40px;
                &.slick-next::before {
                    font-size: 25px;
                    color: ${(props) => props.theme.colors.darkBlack}
                }
            }
        }

        @media(min-width: 400px) {
            button {
                &.slick-prev {
                    left: -30px !important;
                }
                &.slick-next {
                    right: -30px !important;
                }
            }
        }
    }
`;
export const Card = styled.div`
    display: flex !important;
    flex-direction: column;
    width: 200px !important;
    padding: 15px;
    margin: 10px 0px !important;
    background-color: ${(props) => props.theme.colors.whiteGlobal};
    -webkit-box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45); 
    box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45);
    justify-content: center !important;
    align-items: center !important;
    border-radius: 8px;

    @media(max-width: 800px) {
        width: 150px !important;
        padding: 10px;
    }

    @media(max-width: 599px) {
        width: 120px !important;
        padding: 10px;

        img {
            width: 80%;
        }
    }
`;
export const Description = styled.div`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h5{
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 0px;
        color: ${(props) => props.theme.colors.darkBlack};
        text-overflow: ellipsis;
        word-break: break-all;
    }

    p{
        font-size: 20px;
        color: ${(props) => props.theme.colors.darkBlack};
        font-weight: ${(props) => props.theme.fontWeightSemiBold};
    }

    button{
        display: flex;
        justify-content: center;
        width: 80% !important;
        padding: 0px 15px !important;
        border: green solid 2px;
        background-color: ${(props) => props.theme.colors.darkGreen};
        font-size: 20px;
        color: ${(props) => props.theme.colors.whiteGlobal};
        border-radius: 6px;
        cursor: pointer;
        
        :hover{
            background-color: ${(props) => props.theme.colors.whiteGlobal};
            color: ${(props) => props.theme.colors.darkGreen};
            font-weight: bold;
        }
        i {
            margin-right: 5px;
        }
    }

    @media(max-width: 800px) {
        h5 {
            font-size: 16px;
        }
        p {
            font-size: 18px;
        }
        button {
            font-size: 18px;
        }
    }

    @media(max-width: 599px) {
        h5 {
            font-size: 14px;
        }
        p {
            font-size: 16px;
        }
        button {
            font-size: 16px;
        }
    }
`;