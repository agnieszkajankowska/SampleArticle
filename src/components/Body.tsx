import React from 'react'

interface Props {
    values: string[]
}

export const Body = (props: Props) => {
    return <>
        {props.values.map(value => <p>{value}</p>)}
    </>
}