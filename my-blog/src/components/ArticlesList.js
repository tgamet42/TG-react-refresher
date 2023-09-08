/***********************************************************
 * ArticleList page for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * 
 * This is a component which will output Link objects to the browser for each Article read
 * into the articles map. The user sees each Article's title and the first 20 characters of the first line.
 **********************************************************/

import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
	return (
		<>
		{articles.map(article => (
			<Link key={article.name} to={`/article/${article.name}`}>
				<h3>{article.title}</h3>
				<p>
					{article.content[0].substring(0, 20)}
				</p>
			</Link>
		))}
		</>
	)
}

export default ArticlesList;