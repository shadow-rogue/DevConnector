DevConnector 

A social media application for developers.

Frontend : ReactJS

Backend: Node.js, Express.js and MongoDB



It is hosted [here.](https://evening-oasis-48794.herokuapp.com/)

Quick Start 🚀
Add a default.json file in config folder with the following

{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}

Install server dependencies

npm install

Install client dependencies

cd client
npm install

Run both Express & React from root

npm run dev

Check in browser on http://localhost:5000/
