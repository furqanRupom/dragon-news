import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {Id} = useParams()
    const categoryNews = useLoaderData()

    return (
        <div>
            {Id && <h1>category news {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
}

export default Category;
