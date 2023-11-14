# Gym Blog App - Backend

## In the Backend we first install the dependcies such as:
- Nodemon 
- Body-parser
- Express 
- Mongoose
- Cors
- Bcrypt

These dependcies allow us to work within the back end to install our routes and models.

We first make our models that contain the collections for our workouts and users.

Then we move on to the routes and code the routes for the workout users and workout posts.

## For the users the routes are:
- /sign-in
- /register

## For the workout posts, the routes are:
- /create-workout
- /getfromuser/

This routes will allow us to move within the blog and will allow us to create users and the workout posts.

From this we will go to our main `app.js` to declare the dependices and set up our database that will connect to our collections.

In the `app.js` file we will also set up our server that will connect to our frontend where the website will come together.

