import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #2b2b2c;
    flex-direction: column;
    font-family: Lucida sans;

    h1{
        color: white;
    }
`;
export const ContainerDescricoes = styled.div`
    width: 100%;
    background-color: #202024;
    text-align: end;
    span{
        margin-inline: 100px;
        font-size: 20px;
        color: white;
    }
`;
export const ContainerProductor = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img{
        width: 150px;
        height: 100px;
        border-radius: 15px;
       
    }
    div{
        width: 450px;
        margin-left: 20px;
    }
    span{
        color: white;
        font-size: 25px;
    }
`;
export const ContainerSubDescricoes = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    
    span{
        text-align: end;
        color: white
    }
    a{
        color: green;
        font-style: italic;
    }
`;
export const ContainerOption = styled.div`
    width: 25%;
    display: flex;

    select{
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
`;