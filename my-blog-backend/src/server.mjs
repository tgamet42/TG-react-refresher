/***********************************************************
 * Server backend functions for Thomas Gamet's refresher coding on React and client-server architectures.
 * Licensed under Apache 2.0.
 * "express": "^4.18.2" for middle HTML and CSS serving
 * "mongodb": "^5.0.1" for the back end
 * "nodemon": "^2.0.20"
 * 
 * Install MongoDB and create a my-blog-db database within it
 * Using MongoDB Compass add Collection Articles to my-blog-db and add data from ExampleArticlesForMongoDB.json
 * Using MongoDB Compass add Collection Users to my-blog-db and add data from ExampleUsersForMongoDB.json
 * The default MongoDB port number is assumed, and localhost is used, below
 * 
 * The API calls maintain a similar structure to the names of pages in which they are used.
 * 
 * Start this backend with npx nodemon src/server.js
 * Leave the default use of localhost and port 8000, or make appropriate changes
 * The setup is rather permissive, and only suitable or development use
 **********************************************************//* The backend needs Mondgodb services running - specific versions built with and recommended */

import express from 'express';
import { MongoClient } from 'mongodb'

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
	req.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// do not use res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.get('/api/articles', async (req, res) => {

	const client = new MongoClient('mongodb://127.0.0.1/27017');
	await client.connect();

	try {
		const db = client.db('my-blog-db')
		const articles = await db.collection('Articles').find().toArray();

		if (articles) {
			res.json(articles);
		}
		else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	} finally {
		client.close();
	}
})

app.get('/api/article/:name', async (req, res) => {
	const { name } = req.params;

	const client = new MongoClient('mongodb://127.0.0.1/27017');
	await client.connect();

	try {
		const db = client.db('my-blog-db')
		const article = await db.collection('Articles').findOne({ name });

		if (article) {
			res.json(article);
		}
		else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	} finally {
		client.close();
	}
})

app.put('/api/article/:name/upvote', async (req, res) => {
	const { name } = req.params;

	const client = new MongoClient('mongodb://127.0.0.1/27017');
	await client.connect();

	try {
		const db = client.db('my-blog-db')
		await db.collection('Articles').updateOne({ name }, { $inc: { upvotes: 1 }, })
		const article = await db.collection('Articles').findOne({ name });

		if (article) {
			res.json(article);
		}
		else {
			res.send('The article doesn\'t exist!');
		}
	
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	} finally {
		client.close();
	}
});

app.post('/api/article/:name/comments', async (req, res) => {
	const { name } = req.params;
	const { postedBy, text } = req.body

	const client = new MongoClient('mongodb://127.0.0.1/27017');
	await client.connect();

	try {
		const db = client.db('my-blog-db')
		await db.collection('Articles').updateOne({ name }, { $push: { comments: { postedBy, text } }, })
		const article = await db.collection('Articles').findOne({ name });

		if (article) {
			res.json(article);
		}
		else {
			res.send('The article doesn\'t exist.');
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	} finally {
		client.close();
	}
});

app.post('/api/users/:name', async (req, res) => {
	const { name } = req.params;
	const { postedBy } = req.body

	const client = new MongoClient('mongodb://127.0.0.1/27017');
	await client.connect();

	try {
		const db = client.db('my-blog-db')
		await db.collection('Users').insertOne({ name }, { $push: { postedBy }, })
		const username = await db.collection('Users').findOne({ name });

		if (username) {
			res.json(username);
		}
		else {
			res.send('The user doesn\'t exist.');
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	} finally {
		client.close();
	}
});

app.listen(8000, () => { console.log('Server is listening on port 8000'); })