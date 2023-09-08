/***********************************************************
 * Home page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * This is kept simple.
 **********************************************************/

const AboutPage = () => {
	var username = localStorage.getItem('UserSignInName');

	return (<><h1> This website was built specifically to refresh my knowledge of JavaScript and the MERN stack was an easy approach.</h1>
		<p>Licensed under Apache 2.0 by Thomas Gamet.</p> <p>Signed in as {username}.</p>
		<p>There was no attempt to make this pretty or secure via logins.</p>
	</>);
	}

export default AboutPage;