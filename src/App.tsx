import React, {useEffect, useState} from 'react';
import './App.css';
import {Article, IArticle} from "./components/Article";
import axios from 'axios';
import {Error} from "./components/Error";
import {Loader} from "./components/Loader";
import { Container } from 'reactstrap';

const App = () => {
    const [article, setArticle] = useState<IArticle | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    //Preparation to fetch articles basing on article id
    const [query] = useState<string>('fa9519d5-0363-4b8d-8e1f-627d802c08a8');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://my12.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/${query}`;
                const baseUrl = 'https://my12.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124';
                const result = await axios(url);
                const article = {...result.data.elements};

                // Lines 23-29 are a facilitation that I assumed for this exercise.
                // Probably I would consume 'result.data.elements' as a whole, including 'mainImage'
                // It would depend on the contract of the API, therefore possible data structure
                if (article.mainImage) {
                    delete article.mainImage;
                    article.image = {
                        elementType: 'image',
                        value: baseUrl + result.data.elements.mainImage.value.leadImage.renditions.card.source,
                        title: result.data.elements.mainImage.value.leadImageCaption.value
                    }
                }
                setArticle(article);
            } catch {
                setIsError(true);
            }
        };

        fetchData();
    }, [query]);

    return <Container>
        {isError ? <Error/> :
            article !== null ?
                <Article data={article}/> :
                <Loader/>
        }
    </Container>
}

export default App;
