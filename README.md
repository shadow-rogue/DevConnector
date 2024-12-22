# DevConnector 

A social media application for developers.

Frontend : ReactJS

Backend: Node.js, Express.js and MongoDB



It is hosted [here.](https://devconnector-qrnr.onrender.com/)

## Quick Start 🚀
Add a default.json file in config folder with the following

```json
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

Check in browser on (http://localhost:5000/)
