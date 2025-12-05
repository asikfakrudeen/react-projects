import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log(import.meta.env.VITE_API_KEY);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${'3237b40c5cc442a78352336d4dd88ab2'}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles || []))
            .catch(err => {
                console.error('Failed to fetch articles', err);
                setArticles([]);
            });
    }, [category]);

    return (
        <div className="main">
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>

            <div className="news-grid">
                {articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsBoard;