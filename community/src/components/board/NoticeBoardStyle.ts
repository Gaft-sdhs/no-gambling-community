import styled from "styled-components";

export const BoardWrap = styled.div`
    width: 100vw;
    height: 500px;
    border: 1px solid;
`;

export const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const newsWrap = styled.div`
    width: 300px;
    height: 400px; 
    display:flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    border: 1px solid  #2B3142;
`;

export const newsHead = styled.div`
    width: 300px;
    height: 50px;
    background-color: #2B3142;
    font-size: 10px;
    text-align: center;
    line-height: 50px;
`;

export const newsName = styled.h1`
    font-size: 20px;
    color: #fff;
`

export const newsImg = styled.img`
    width: 100%;
    height: 300px;
`;


export const newsFooter = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: #2B3142;
    color: #fff;
` 

export const newsText = styled.p`
    color: #fff;
    font-size: 0.84rem;
`


