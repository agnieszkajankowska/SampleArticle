import React, {useEffect, useState} from 'react';
import './App.css';
import {Heading} from "./components/Heading";
import {Author} from "./components/Author";
import {DateComponent} from "./components/Date";
import {Body} from "./components/Body";
import {Image} from "./components/Image";
import axios from 'axios';

interface TextElement {
    elementType: string,
    value: string
}

interface FormattedTextElement {
    elementType: string,
    values: string[]
}

interface Article {
    heading: TextElement,
    author: TextElement,
    body: FormattedTextElement,
    date: TextElement
}

const App = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://my12.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8';
                const result = await axios(url)

                const article = {...result.data.elements}
                delete article.mainImage
                setArticle(article);
            } catch {
                setIsError(true);
            }
        };

        fetchData();
    }, []);

    return <>
        {isError ? <div>Something went wrong ...</div> :
            article !== null ?
                <div className="App">
                    <Heading value={article.heading.value}/>
                    <Author value={article.author.value}/>
                    <DateComponent value={article.date.value}/>
                    <Body paragraphs={article.body.values}/>
                    <Image/>
                </div> : <div>Loading article...</div>
        }
    </>
}

export default App;
