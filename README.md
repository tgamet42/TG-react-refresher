# react-refresher

Getting Started with Create React App using MongoDB and Axios in Node.JS with Express
Server backend functions for Thomas Gamet's refresher coding on React and client-server architectures.

"express": "^4.18.2" for middle HTML and CSS serving
"mongodb": "^5.0.1" for the back end
"nodemon": "^2.0.20"

Install MongoDB and create a my-blog-db database within it
Using MongoDB Compass add Collection Articles to my-blog-db and add data from ExampleArticlesForMongoDB.json
Using MongoDB Compass add Collection Users to my-blog-db and add data from ExampleUsersForMongoDB.json

The default MongoDB port number is assumed, and localhost is used, below

The API calls maintain a similar structure to the names of pages in which they are used.

Start this backend from my-blog-backend with npx nodemon src/server.js

Leave the default use of localhost and port 8000, or make appropriate changes
The setup is rather permissive, and only suitable or development use

App.js as main() entry for Thomas Gamet's refresher coding on React and client-server architectures.

Run this App with the following from my-blog
npm run start

This is kept simple with default ports and localhost used in all cases. The CSS file is also simple.
The App sets up a Navigation Bar (also kept simple) and routing for Home, About, Articles, each Article, and a Sign-In

Errors may indicate missing node_modules directories for node.js to run correctly. A public directory may also be needed under my-blog. These are rather large and therefor not part of the checkin on GitHub. A full installation of Node.js should take care of them less any deprecations or version issues.
