/***********************************************************
 * AddCommentsForm page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * This form is only displayed when a user is signed in
 * The comment is written to MongoDB via server.js with the name used in the most recent signin
 * The name of the signed in visitor is kept in local storage and retained in memory by the browser
 **********************************************************/

import { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
	var username = localStorage.getItem('UserSignInName');
	//const [name, setName] = useState('');
	const [commentText, setCommentText] = useState('');

	const addComment = async () => {
		const response = await axios.post(`/api/article/${articleName}/comments`,
			{
				postedBy: username,
				text: commentText,
			});
		const updatedArticle = response.data;
		onArticleUpdated(updatedArticle);
		//setName('');
		setCommentText('');
	}

	return (
		<div id="add-comment-form">
			<h3>Add a Comment</h3>
			<div>
			<label>
				Comment:
					<textarea
						value={commentText}
						onChange={e => setCommentText(e.target.value) }
						rows="4"
						cols="50" />
				</label>
			</div>
			<button onClick={addComment}>Add Comment</button>
		</div>
		)
}

export default AddCommentForm;