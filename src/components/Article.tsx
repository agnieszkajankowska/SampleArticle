import React from 'react';
import {Heading} from "./Heading";
import {Author} from "./Author";
import {DateComponent} from "./Date";
import {Body} from "./Body";
import {Image} from "./Image";

interface TextElement {
    elementType: string,
    value: string
}

interface FormattedTextElement {
    elementType: string,
    values: string[]
}

export interface IArticle {
    heading: TextElement,
    author: TextElement,
    body: FormattedTextElement,
    date: TextElement
}

interface Props {
    data: IArticle
}

export const Article = (props: Props) => {
    return <div className="App">
        <Heading value={props.data.heading.value}/>
        <Author value={props.data.author.value}/>
        <DateComponent value={props.data.date.value}/>
        <Body paragraphs={props.data.body.values}/>
        <Image/>
    </div>
}
