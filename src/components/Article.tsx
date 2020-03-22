import React from 'react';
import {Heading} from "./Heading";
import {Author} from "./Author";
import {DateComponent} from "./DateComponent";
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
    const {heading, author, date, body} = props.data;
    return <div className="App">
        {heading && <Heading value={heading.value}/>}
        {author && <Author value={author.value}/>}
        {date && <DateComponent value={date.value}/>}
        {body && <Body paragraphs={body.values}/>}
        <Image/>
    </div>
}
