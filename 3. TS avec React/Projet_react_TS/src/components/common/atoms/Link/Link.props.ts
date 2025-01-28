import { ReactNode } from "react"

export interface ILink {
    className?: string
    content: ReactNode
    href: string
    target?: string
}