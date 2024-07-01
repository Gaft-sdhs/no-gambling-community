import React, { useEffect, useState } from "react";
import * as S from "./NoticeBoardStyle";
import { News } from "../../interface/NewsInterface";
import {fetchDongaData,getJosonData} from "../../functions/getNewsFunction";
import { getAllPosts } from "../../api/posts";
const link = 'https://www.donga.com/news/search?query=%EC%B2%AD%EC%86%8C%EB%85%84+%EB%8F%84%EB%B0%95&check_news=91%7C4%7C5%7C81%7C92&sorting=1&search_date=1&v1=&v2=&more=';
const link2 = 'https://search.hankookilbo.com/Search?tab=NEWS&sort=relation&searchText=%20%EB%8F%84%EB%B0%95&searchTypeSet=TITLE,CONTENTS&selectedPeriod=%EC%A0%84%EC%B2%B4&filter=head';
export const NoticeBoard = () =>{
    const [data,setData] = useState<News | null>(null);
    const [data2,setData2] = useState<News | null>(null);

    useEffect(()=>{
        const getData = async () =>{
            const fetchData = await fetchDongaData(link) as unknown as News;
            setData(fetchData);
        }

        getData();
    },[]);

    useEffect(()=>{
        const getData = async () =>{
            const fetchData = await getJosonData(link2) as unknown as News;
            setData2(fetchData);
        }

        getData()
    },[])
    useEffect(()=>{
        const getPost = async ()=>{
            console.log(await getAllPosts());
        }
        // console.log(await getPost())
        getPost();
    },[]);
    // console.log(getAllPosts())

    return(
        <S.BoardWrap>
        <S.Container>
        <S.newsWrap>
        <S.newsHead>
            <S.newsName>동아일보</S.newsName>
        </S.newsHead>
        {
           data !== null ?  <S.newsImg src={data.imgSrc}/>:<span>loading...</span>

        }
       <S.newsFooter>
        {
            data !== null ? <a href={data.newsLink} color="#fff"><S.newsText>{data.title}</S.newsText></a>:<span>loading...</span>
        }
       </S.newsFooter>
        </S.newsWrap>

        <S.newsWrap>
            <S.newsHead>
                <S.newsName>한국일보</S.newsName>
            </S.newsHead>
            {
                data2 !== null ? <S.newsImg src={data2.imgSrc}/>:<span>loading...</span>
            }
            <S.newsFooter>
                {
                    data2 !== null ? <a href={data2.newsLink}><S.newsText>{data2.title}</S.newsText></a>:<span>loading...</span>
                }
            </S.newsFooter>
        </S.newsWrap>
        </S.Container>
        </S.BoardWrap>
    )
};