import React, { useEffect, useState } from "react"
import { fetchArticles } from "../core/queries"
import { Article } from "./Article"
import { IArticle } from "../types/Articles"


export const ArticleList = () => {
    const [articles, setArticles] = useState<IArticle[]>([])
    
    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            try {
                const data = await fetchArticles()
                setArticles(data)
            }
            catch(err) {
                console.log(err)
            }
        }

        fetchData()
        
    }, [])

    return (
        <>
            {articles.map(article => {
                return <Article data={article} key={`${article.publishedAt}-${article.title}`}/>
            })}
        </>
    )
}