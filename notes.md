#Notes

##Steps

1. create repository in Github
2. clone repository
3. cd into folder
4. Initialize with npm init -y
5. Add gitignore file with: npx gitignore node or npm i -g gitignore and then gitignore none.
6. git add .
7. git commit -m "message"
8. git push -u origin master/your branch (-u is the same as git push --set-upstream origin your-branch)
9. Make an api folder and add server.js
    -import const express with require
    -set up the server with express
    -wire a server.get() with a 200 status so we can test if it is working in postman
    - exprt defualt server with module.exports so that index.js can import it
    -
    //server.js:
    `const express = require('express');`

    `const server = express();`

    `server.get('/', (req, res) => {
        res.status(200).json({api: 'up'})
    })`

    //export default server;
    module.exports = server;

10. set up index.js
    -import server from './api/server.js'
    -create a port variable
    -set up the server to listen to said above port

    //index.js

    //import server from './api/server.js'
    `const server = require('./api/server.js')`

    `const port= 8000;`

    `server.listen(port, () => console.log(`\n** API on port ${port}**\n`));`

11. Add nodemon: npm i -D nodemon
12. Add the following under scripts of package.json:
    "server": "nodemon index.js"
13. npm run server and test in insomnia or Postman
14. Don't forget to make a commit and push
15. Build Router

When we fof npm i axios, the axios package foes into the node_modules folder/

React applications are broken up into components.

Express APIs are broken up into Express Routers.


## client server architecture:

[client] <network (JSON) > [api] <> [data sources]


## request / response cycle:

1. client makes a request to a server
2. server produces a response and sends it to the client

mw = middleware

[client] > request > [mw > mw> mw] > responds [client]

## Middleware

- can see the request and do something with the information   from the request
- can stop the request and produce a response
- can do nothing
- can do the same with the response as it does with the   r         request
- **can modify the request or response objects**

three types:

- built-in: no need to npm install
- third party: need to install it using yarn or npm
- custom: we build it

Can be used:

- globally with server.use()
- locally at a request handler