import { IArticle } from "../types/Articles"
import React from "react"

interface IArticleProps {
    data: IArticle
}

export const Article : React.FC<IArticleProps> = ({data}) => {

    const addLike = () : void => {
        data.likeNb += 1
    }

    return(
        <div className="card">
            <h3>{data.title}</h3>
            <img src={data.urlToImage} alt={data.title}/>
            <p>{data.content}</p>
            <a href={data.url}>Voir plus</a>
            <button onClick={() => addLike()}>Liker</button>
            <p>{data.likeNb} likes</p>
        </div>
    )
}