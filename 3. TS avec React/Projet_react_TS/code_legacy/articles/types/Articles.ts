export interface IArticle {
    source: string | undefined
    author: string | undefined
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: Date
    content: string
    likeNb: number
}