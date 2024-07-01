import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllPosts = async(): Promise<any> => {
    try {
        const response = await axios.get("https://localhost:3000/post", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching posts: ${error}`);
        throw error;
    }
}
