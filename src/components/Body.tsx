import React from 'react'

interface Props {
    paragraphs: string[]
}

export const Body = (props: Props) => {
    const paragraphs = props.paragraphs.join("");
    const createParagraphs = () => {
        return { __html: `${paragraphs}`}
    }
    return <div className="paragraphs-container" dangerouslySetInnerHTML={createParagraphs()} />
}