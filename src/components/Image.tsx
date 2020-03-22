import React from 'react'

interface Props {
    imageUrl: string,
    imageAlt: string
}

export const Image = (props: Props) => {
    return <img alt={props.imageAlt} src={props.imageUrl} />
}