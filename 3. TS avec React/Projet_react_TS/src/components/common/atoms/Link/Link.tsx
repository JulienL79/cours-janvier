import React from "react";
import { ILink } from "./Link.props";
import './Link.css'

export const Link : React.FC<ILink> = ({className, content, href, target}) => {
    return (
        <a className={className} href={href} target={target}>
            {content}
        </a>
    )
}