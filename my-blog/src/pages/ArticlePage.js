/***********************************************************
 * Article page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * Load a specific article stored in MongoDB and accessed via Express in server.js
 * Display the articles with the help of the CommentsList.js and AddCommentForm.js component
 * The Upvote button interacts direction with server.js and MongoDB
 * The name of the signed in visitor is kept in local storage and retained in memory by the browser
 **********************************************************/

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from "../components/AddCommentForm";

var articles = [];

const ArticlePage = () => {
	var username = localStorage.getItem('UserSignInName');

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
	
	const params = useParams();
	const { name } = params;

	const loadArticles = async () => {
		const response = await axios.get(`/api/articles`);
		articles = response.data;
	}
	loadArticles();

	const article = articles.find(article => article.name === name);

	useEffect(() => {
		const loadArticleInfo = async () => {
			const response = await axios.get(`/api/article/${name}`);
			const newArticleInfo = response.data;
			setArticleInfo(newArticleInfo);
		}
		loadArticleInfo();
	}, [name]);

	const addUpvote = async () => {
		const response = await axios.put(`/api/article/${name}/upvote`);
		const updatedArticle = response.data;
		setArticleInfo(updatedArticle);
	}

	if (!article) {
		return <NotFoundPage />
	}
	return (
		<>
			<h1>{article.title}</h1>
			<div className='upvotes-section'>
				<button onClick={addUpvote}>Upvote</button>
				<p>This artcile has {articleInfo.upvotes} upvote(s)</p>
			</div>
			{article.content.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
			{username > " " ? (
				<AddCommentForm
					articleName={name}
					onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
			) : (null) }
			<CommentsList comments={articleInfo.comments} />
		</>
	);
}

export default ArticlePage;