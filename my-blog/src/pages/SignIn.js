/***********************************************************
 * SingIn page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * The name of the signed in visitor is kept in local storage and retained in memory by the browser
 * The name entered for sigin is logged in the MongoDB via the Express server in the server.js code
 * The option to leave a comment does require a user to provide a name via signin
 * The is no attempt made to secure the users chosen name with a password - this operates like a guest book only
 **********************************************************/

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	
	const signInUser = async () => {
		const response = await axios.post(`/api/users/${name}`,
			{
				postedBy: name
			});
		const theresult = response.data;
		setName(theresult);
		setName(name);
		localStorage.setItem('UserSignInName', name);
		navigate('/Articles');
	}
	
	return (
		<>
			<h3>This Sign In works like a wedding book on the honor system</h3>
			<p>You are currently signed in as {localStorage.getItem('UserSignInName')}.</p>
			<div>
				<label>
					Name:
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						type="text" />
				</label>
			</div>
			<button onClick={signInUser}>Sign-In</button>
		</>
	)
}

export default SignInPage;
