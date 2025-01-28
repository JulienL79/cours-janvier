import { Comment } from "@common-molecules/Comment"
import { IComments } from "types/Comments"
import { useComments } from "@hooks/queries"
import { Skeleton } from "@common-atoms/Skeleton"

export const CommentList = () => {
    const {data, isLoading, isError, error, refetch} = useComments()

    if (isLoading) {
        const skeletons = Array.from({ length: 5 }, (_, i) => i)
        return (
            <div>
                <h2 style={{ marginBottom: "2rem" }}>Liste de commentaires</h2>
                { skeletons.map((key) => (
                    <div key={key} style={{ marginBottom: "2rem" }}>
                        <Skeleton width="100%" height="150px" />
                    </div>
                ))}
            </div>
        )
    }

    if (isError)
        return <p>Une erreur est survenue ! { String(error) }</p>

    return (
        <div>
            <h2>Liste de commentaires</h2>
            <button onClick={() => refetch()}>Rafraîchir</button>
            { data.map((comment: IComments) => (
                <Comment id={comment.id} name={comment.name} body={comment.body} likeNb={comment.likeNb}/>
            ))}
        </div>
    )
}