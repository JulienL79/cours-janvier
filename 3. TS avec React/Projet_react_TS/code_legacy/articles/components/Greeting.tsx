import React, { useEffect, useState } from "react"

interface Igreeting {
    name: string
    age?: number
}

export const Greeting : React.FC<Igreeting> = ({name, age}) => {
    const [isMajor, setIsMajor] = useState<boolean | undefined>(age !== undefined ? age && age >= 18 ? true : false : undefined)

    const confirmIsMajor = () : void =>  {
        setIsMajor(true)
    }  

    return (
        <>
            <h1>{`Hello ${name}, welcome to our site!`}</h1>
            {isMajor !== undefined ? 
                isMajor ? 
                    <h2>"Vous avez l'âge requis"</h2> 
                : 
                    <h2>"Vous n'avez pas l'âge requis"</h2>
                : 
                    <>
                        <h2>"Confirmez-vous avoir plus de 18 ans?"</h2>
                        <button onClick={() => confirmIsMajor()}>Je confirme</button>
                    </>
            }
        </>
    )
}