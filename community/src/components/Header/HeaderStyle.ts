import styled from "styled-components";
import img from   '../../img/logo.png';


export const HeaderBox = styled.header`
    width: 100vw;
    height: 80px;
    background-color: #2B3142;
    color: #fff;
    display:flex;
`;

export const ImgWrap = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img.attrs({
    src:img,
    alt:"logo",
})`
    width: 60px;
    height: 60px;
`;

export const FirstHalf = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
`;

export const SecondHalf = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const Text = styled.a`
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    color: #fff;
`;

export const ThridHalf = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Btn = styled.button`
    width: 150px;
    height: 50px;
`

