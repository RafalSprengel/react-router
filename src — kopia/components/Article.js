import React from 'react';
import '../css/Article.css';

const Article = ({ text, author, title }) => {
    return (
        <article>
            <h2>{title}</h2>
            <div className='article-text'>{text}</div>
            <div className='article-author'>author: {author}</div>
        </article>
    )
}
export default Article;