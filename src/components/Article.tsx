import React from 'react';
import {Heading} from "./Heading";
import {Author} from "./Author";
import {DateComponent} from "./DateComponent";
import {Image} from "./Image";
import {Body} from "./Body";

interface TextElement {
    elementType: string,
    value: string
}

interface FormattedTextElement {
    elementType: string,
    values: string[]
}

interface ImageElement {
    elementType: string,
    value: string,
    title: string
}

export interface IArticle {
    heading?: TextElement,
    author?: TextElement,
    body?: FormattedTextElement,
    date?: TextElement,
    image?: ImageElement
}

interface Props {
    data: IArticle
}

export const Article = (props: Props) => {
    const {heading, author, date, body, image} = props.data;
    return <div className="App">
        {heading && <Heading value={heading.value}/>}
        {author && <Author value={author.value}/>}
        {date && <DateComponent value={date.value}/>}
        {body && <Body paragraphs={body.values}/>}
        {image && <Image imageUrl={image.value} imageAlt={image.title}/>}
    </div>
}
