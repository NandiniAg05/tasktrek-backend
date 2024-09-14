const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;


// const { Router } = require("express"): This line imports the Router object from the "express" package. In Express.js, the Router object allows you to create modular, mountable route handlers, which can be used to define routes for your application.

// const router = Router(): Here, a new instance of the Express.js Router is created and assigned to the variable router. This instance will be used to define the HTTP routes and their corresponding handlers.

// router.get('/', (req, res) => { ... }): This line defines a route for handling HTTP GET requests to the root path ("/"). It uses the get method of the router object. The get method is used to handle GET requests. The arrow function (req, res) => { ... } is the request handler for this route. It takes two parameters: req (the request object) and res (the response object).

// req: Represents the HTTP request made to the server and contains information about the request, such as headers, query parameters, and request body.
// res: Represents the HTTP response that the server will send back to the client. You use it to send a response to the client, such as JSON data, HTML, or other content.
// res.json({message: "Hi there..."}): Inside the request handler, res.json({message: "Hi there..."}) sends a JSON response back to the client with the specified message. In this case, it sends a JSON object with a single key-value pair where the key is "message" and the value is "Hi there...". This is a simple example of how you can send JSON responses in Express.js.

// module.exports = router;: At the end of the module, the router object, which contains the defined route, is exported as a module. This allows you to use this router in other parts of your application by requiring it with require and mounting it on your Express application using app.use.

// In summary, this code defines a very basic Express.js route that responds to HTTP GET requests to the root path ("/") with a JSON message "Hi there...". This is just one of the many routes you can define in an Express.js application to handle different types of requests and serve content to clients.