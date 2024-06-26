// import {react} from "react";
import * as  S from "./HeaderStyle";

export const Header = () =>{
    return(
    <S.HeaderBox>
        <S.FirstHalf>
            <S.ImgWrap>
                <S.Img/>
            </S.ImgWrap>
            <S.SecondHalf>
                <S.Text>인기게시글</S.Text>
                <S.Text>최근게시글</S.Text>
                <S.Text>글등록</S.Text>
            </S.SecondHalf>
        </S.FirstHalf>
        <S.ThridHalf>
            <S.Btn>login</S.Btn>
            <S.Btn>register</S.Btn>
        </S.ThridHalf>
    </S.HeaderBox>        
    )
}