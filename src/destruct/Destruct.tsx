import React from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
            name?: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

function useAisState(m: string) {
    return [m, function (){}]
}

export const ManComp: React.FC<PropsType> = (props) => {
    const {title, man,...rest} = props

    const [message, setMessage] = useAisState('hi')

    return <div>
        {/*<h1>{props.title}</h1>*/}
        <h1>{title}</h1>
        <div>{rest.car.model}</div>
        {/*<div>{props.man.name}</div>*/}
    </div>
}