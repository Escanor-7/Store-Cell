import styled from "styled-components";

export const Banner = styled.img`
    width:100%;
`;
export const Container = styled.div`
    background-color: #2c2b2b;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

    /* Foi assim que consegui acessar as setas do slider */
    div {
        button {
            &.slick-prev {
                left: 10px !important;
                z-index: 1;
                
                :before{
                    color: black;
                    font-size: 25px;
                }
            }
            &.slick-next {
                right: 10px !important;
                z-index: 1;

                :before{
                    color: black;
                    font-size: 25px;
                }
            }
        }
    }
`;