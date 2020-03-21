import React from 'react'

interface Props {
    paragraphs: string[]
}

export const Body = (props: Props) => {
    return <>
        {props.paragraphs.map((value, index) => <p key={index}>{value}</p>)}
    </>
}