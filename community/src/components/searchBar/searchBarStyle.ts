import styled from "styled-components";
import img from "../../img/searchImg.png"
export const Wrap = styled.div`
    width: 100vw;
    height: 70px;
    display:flex;   
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const SearchbarWrap = styled.div`
    width: 350px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 20px;
    border-radius : 40px;
    border-color: #2B3142;
    background-color: #2B3142; 
`;



export const Bar = styled.input.attrs({
    placeholder:"검색할 게시글을 입력하세요",
})`
    width: 280px;
    height: 80%;
    text-align: center;
    font-size: 15px;
    border-radius: 40px;
`

export const searchImg = styled.img.attrs({
    src:img,

})`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #2B3142;

`