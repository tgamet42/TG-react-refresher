/***********************************************************
 * App.js as main() entry for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * You will need to install MongoDB and if you want to see articles appear then you will need to create them.
 * 
 * First start the npm Express server in directory reactapps/my-blog-backend
 * npm run dev
 * 
 * Second, run this App with
 * npm run start
 * 
 * This is kept simple with default ports and localhost used in all cases. The CSS file is also simple.
 * The App sets up a Navigation Bar (also kept simple) and routing for Home, About, Articles, each Article, and a Sign-In
 **********************************************************/

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import SignInPage from './pages/SignIn'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="menu-body">
          <NavBar />
          </div>
          <div id="page-body">
          <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/About" element={<AboutPage />} />
                        <Route path="/Articles" element={<ArticlesPage />} />
                        <Route path="/Article/:name" element={<ArticlePage />} />
                        <Route path="/SignIn" element={<SignInPage />} />
                        <Route path="*" element={<NotFoundPage />} />
           </Routes>
         </div>
       </div>
      </BrowserRouter>
  );
}

export default App;
