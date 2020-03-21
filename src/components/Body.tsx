import React from 'react'

interface Props {
    values: string[]
}

export const Body = (props: Props) => {
    return <>
        {props.values.map((value, index) => <p key={index}>{value}</p>)}
    </>
}