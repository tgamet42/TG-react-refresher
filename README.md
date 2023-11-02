# react-refresher

Getting Started with Create React App using MongoDB and Axios in Node.JS with Express.

Server backend functions are the result of Thomas Gamet's refresher coding on React and client-server architectures.

"express": "^4.18.2" for middle HTML and CSS serving
"mongodb": "^6.2.0" for the back end
"react-scripts": "^5.0.1"

Install MongoDB and create a my-blog-db database within it
Using MongoDB Compass add Collection Articles to my-blog-db and add data from ExampleArticlesForMongoDB.json
Using MongoDB Compass add Collection Users to my-blog-db and add data from ExampleUsersForMongoDB.json

The default MongoDB port number is assumed, and localhost is used.

The API calls maintain a similar structure to the names of pages in which they are used.

Start this backend from my-blog-backend with npx nodemon src/server.mjs

Leave the default use of localhost and port 8000, or make appropriate changes
The setup is rather permissive, and only suitable for development use

App.js is the frontend entry for Thomas Gamet's refresher coding on React and client-server architectures.

Run this App with the following from my-blog
npm run start

This is kept simple with default ports and localhost used in all cases. The CSS file is also simple.
The App sets up a Navigation Bar (also kept simple) and routing for Home, About, Articles, each Article, and a Sign-In

Errors may indicate missing node_modules directories for node.js to run correctly.

The frontend needs "npm install express" and "npm install react-scripts"
The backend needs "npm install express" and "npm install mongodb"
Issues can often be resolved with an "npm update" to update the node_modules content in my-blog and my-blog-backend.
If an update fails, a clean start is more likely to work than npm audit, however, you can try both.
A clean rebuild works as follows
  1. Delete package-lock.json (not package.json!) in your project folder.
  2. Delete node_modules in your project folder.
  3. Run npm install.
  4. Finally, run npm audit fix --force (then test as --forcing may or may not require a code change - odds are low that it will require a code change).
Of course, before doing any of the above make sure Node.js and MongoDB are upgraded.