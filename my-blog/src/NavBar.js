/***********************************************************
 * NavBar.js for the app menu rendering of Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * The App has this Navigation Bar (kept simple) for routing among the Home, About, Articles, and a Sign-In page
 **********************************************************/

import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <sp>  </sp>
                <Link to="/About">About</Link>
                <sp> </sp>
                <Link to="/Articles">Articles</Link>
                <sp> </sp>
                <Link to="/SignIn">SignIn</Link>
            </ul>
        </nav>
    );
}

export default NavBar;