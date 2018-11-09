# Review Questions

## What is Node.js?
Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. Basically it gives developers the choice to use JavaScript on the back end.

## What is Express?
Express is a framework that works in conjunction with Node.js and abstracts away some of the more routine http commands making server creation a little more intuitive and easier to write.

## Mention two parts of Express that you learned about this week.
Middleware and routing.

## What is Middleware?
Middleware is an array of functions that can change the request or response or send data to an unrelated source.

## What is a Resource?
The information we pull in using HTTP methods.

## What can the API return to help clients know if a request was successful?
http status codes. Anything in the 200s indicates success, 300s indicates redirection, 400s indicates client error, 500s indicates server errors.

## How can we partition our application into sub-applications?
Express routing and importing middleware.

## What is express.json() and why do we need it?
Express.json() allows us to send a javascript object.