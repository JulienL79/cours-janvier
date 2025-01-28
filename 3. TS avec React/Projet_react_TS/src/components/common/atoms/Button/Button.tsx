import { IButton } from "./Button.props";
import "./Button.css"

export const Button : React.FC<IButton> = ({className, content, onClick}) => {
    return (
        <button className={className} onClick={() => onClick()}>{content}</button>
    )
}