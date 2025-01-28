import axios from "axios";
import { IArticle } from "../types/Articles";

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const COUNTRY_CODE = "us"


export const fetchArticles  = async () : Promise<IArticle[]> => {

    const response = await axios.get(`${API_URL}country=${COUNTRY_CODE}&apiKey=${API_KEY}`)
    const datas = response.data.articles

    if (!Array.isArray(datas)) {
        throw new Error("Invalid data format. Expected an array of articles.");
    }

    const dataToReturn = datas.map(article => ({
        ...article,
        likeNb: 0})
    ) as IArticle[]
    
    return dataToReturn 
}
