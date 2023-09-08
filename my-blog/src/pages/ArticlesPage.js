/***********************************************************
 * Articles page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * Load articles stored in MongoDB and accessed via Express in server.js
 * Display the articles with the help of the ArticlesList.js component
 * The list of articles is loaded only once per browser execution
 * The name of the signed in visitor is kept in local storage and retained in memory by the browser
 **********************************************************/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesList from '../components/ArticlesList';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    var username = localStorage.getItem('UserSignInName');

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const response = await axios.get(`/api/articles`);
                setArticles(response.data);
            } catch (error) {
                console.error('Error loading articles:', error);
            }
        };

        loadArticles();
    }, []); // Empty dependency array to ensure this effect runs only once on component mount

    return (
        <>
            <h1>Articles Page</h1>
            <p>You are signed in as {username}.</p>
            <ArticlesList articles={articles} />
        </>
    );
};

export default ArticlesPage;
