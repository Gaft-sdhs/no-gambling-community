import axios from "axios";

export const getAllPosts = async():Promise<unknown> =>{
   const posts =await  axios.get("https://localhost:3000");
   return posts;
}

console.log(getAllPosts());

