import React from "react";
import { IImage } from "./Image.props";
import './Image.css'

export const Image : React.FC<IImage> = ({className, src, alt}) => {
    return (
        <img className={className} src={src} alt={alt}/>
    )
}