import styled from "styled-components";


export const Container = styled.div`
background: #2b2b2b;
color: white;
display: flex;
align-items: center;
justify-content: space-around;
font-family: poppis, Helvetica;
widht: 100%;
border-top: 8px solid #4a4747;`;

export const Box1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 0.9rem;

`;


export const Box2 = styled.div`
margin-bottom: 0.9rem;
`;

export const Info = styled.div`
display: flex;
align-items: center
`

export const InfoMidias = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1rem;

`;

export const MidiasFinish = styled.div``;

export const MidiasFhotos = styled.div`

display:flex;
justify-content:center;
align-items: center;

`

export const Space = styled.div`
margin: 0.5rem;
`
export const IconsMidias = styled.img`

transition: transform 1s;
width: 4.4rem;
transform: translateX(0) scale(0.7);
    :hover{
        transform: translateX(1rem) scale(1.2);
    }
`;

export const LogoImg = styled.img`

width: 70%;
height: auto;

`;