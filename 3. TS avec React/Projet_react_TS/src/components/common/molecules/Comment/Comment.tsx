import { IComment } from "./Comment.props";
import { Button } from "@common-atoms/Button";
import "./Comment.css"
import { useDeleteComment, useLikeComment } from "@hooks/mutations"

export const Comment : React.FC<IComment>= ({
    id,
    name,
    body,
    likeNb}) => {

        const { mutate: newNameOfFunctionDeleteComments } = useDeleteComment(); 
        const { mutate: newNameOfFunctionLikeComments } = useLikeComment(); 

    return (
        <div className="comment">
            <h2>From ~ {name} ~ :</h2>
            <p>{body}</p>
            <div className="btn-container">
                <Button content="Liker" onClick={() => newNameOfFunctionLikeComments(id)}/>
                <Button className="delete-btn" content="Supprimer" onClick={() => newNameOfFunctionDeleteComments(id)}/>
            </div>
            <p>{likeNb} likes</p>
        </div>
    )
}