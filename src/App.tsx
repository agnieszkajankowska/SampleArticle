import React, {useEffect, useState} from 'react';
import './App.css';
import {Article, IArticle} from "./components/Article";
import axios from 'axios';
import {Error} from "./components/Error";
import {Loader} from "./components/Loader";

const App = () => {
    const [article, setArticle] = useState<IArticle | null>(null);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://my12.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8';
                const result = await axios(url);

                const article = {...result.data.elements};
                delete article.mainImage;
                setArticle(article);
            } catch {
                setIsError(true);
            }
        };

        fetchData();
    }, []);

    return <>
        {isError ? <Error/> :
            article !== null ?
                <Article data={article}/> :
                <Loader/>
        }
    </>
}

export default App;
