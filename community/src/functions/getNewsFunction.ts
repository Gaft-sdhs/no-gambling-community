import axios from "axios";
import * as cheerio  from "cheerio";
const instance = axios.create();


export const fetchDongaData = async(url:string) =>{
    try {
        const { data } = await instance.get(url);
        const $ = cheerio.load(data);
        
        const imgSrc = $('.news_card > .news_head > a > .img_area > img').attr('src');
        const text = $('.news_card > .news_body > .tit > a ').attr('data-ep_button_name');
        const newsLink = $('.news_card > .news_body > .tit > a ').attr("href")
        // console.log(imgSrc);
        // console.log(text)
        // const title = $('title').text();
        // console.log(`Title: ${title}`);
        return {imgSrc,title:text,newsLink};
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
}


export const getJosonData = async(url:string)=>{
    try {
        const {data} = await instance.get(url);
        const $ = cheerio.load(data);

        const imgSrc = $('.tab-contents > .search-result > .tab-contents > .searched-row > .board-list > li > .img-box >  a > .thum-img ').attr('src');
        const title = $(`.tab-contents > .search-result > .tab-contents > .searched-row > .board-list > li > .inn > h3 > a `).text();
        const newsLink = $('.tab-contents > .search-result > .tab-contents > .searched-row > .board-list > li > .inn > h3 > a ').attr('href');
        const truncateText = (text: string, wordLimit: number): string => {
            const words = text.split(' ');
            // console.log(words)
            // console.log(text);
            if (words.length > wordLimit) {
                console.log(words.slice(0, wordLimit).join(' ') + ' ....')
              return words.slice(0, wordLimit).join(' ') + ' ....';
            }
            return text;
          };

        //   console.log(truncateText(title,15))

        console.log(newsLink);
        // console.log(title.trim().replace(" ",""));
        // console.log(newsLink)
          return {imgSrc,title:truncateText(title,15),newsLink};
    } catch (error) {
        console.error(`Error fetching data: ${error}`);

    }
}

