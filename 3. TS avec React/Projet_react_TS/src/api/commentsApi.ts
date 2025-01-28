import axios from "axios";
import { IComments } from "types/Comments";


export const fetchComments  = async () : Promise<IComments[]> => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=10`)

    const datas = response.data.map((comment: any) => ({
        ...comment,
        likeNb: 0})
    ) as IComments[]
    
    return datas
}

export const addLikeToComment = async (id: number) => {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/comments/${id}`, {likeNb: 1})
    return response.data
}

export const deleteComments = async (id: number) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
    return response.data
}
