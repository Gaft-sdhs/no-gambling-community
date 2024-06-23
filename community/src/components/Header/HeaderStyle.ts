import styled from "styled-components";
import img from   '../../img/Screenshot_2024-06-24_145743-removebg-preview.png';


export const HeaderBox = styled.header`
    width: 100vw;
    height: 95px;
    background-color: #2B3142;
    color: #fff;
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
`

export const Text = styled.a`
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    color: #fff;
`