# Gym Blog App - Frontend

## In the Frontend we will get started by creating a componets folder that will hold:
- `CreateWorkout.jsx`
- `DisplayWorkout.jsx`
- `Profile.jsx`
- `Register.jsx`
- `SignInPage.jsx`
- `WorkoutCard.jsx`

With these files we can now get started setting up the website

We will start with the `App.jsx` file to get our routes started and our hook that will allow us to state the users and define which workout belongs to who.

With the `Route` tag we can set the routes like:
- / (Display Workout)
- /create-workout
- /profile
- /register
- /sign-in

Now lets start with the component files

## Features - `CreateWorkout.jsx`
- State Management with useState Hook: The component uses the useState hook to manage the form data and image state.
- Handling User Input: The inputsHandler function captures and updates the user's input for various workout details such as name, description, machine name, and machine link.
- Cloudinary Image Upload: Upon selecting an image file, the cloudHandler function uploads the chosen image to Cloudinary, retrieves the secure URL, and sets it as the workout's image URL.
- Form Submission: Upon form submission, the onSubmit function makes a POST request to a specified endpoint (http://localhost:4000/workouts/create-workout) with the workout details. Upon a successful response, the form is reset for a new entry.
- Dynamic Rendering: The component dynamically renders the form fields and the uploaded image preview for a seamless user experience.

## Features - `DisplayWorkout.jsx`
- State Management with useState Hook: The component utilizes the useState hook to maintain the array of workout data (userForm) fetched from the server.
- Fetching Data with useEffect Hook: The useEffect hook initiates an HTTP GET request to http://localhost:4000/workouts/ upon component mounting. Upon receiving a successful response, the retrieved data populates the userForm state for rendering.
- Rendering Workout Cards: The component maps through the userForm array, generating individual WorkoutCard components for each workout retrieved, thus displaying pertinent workout details.
- Structured UI Output: The UI structure encompasses a title, "Workouts," followed by a grid layout where individual WorkoutCard components are dynamically rendered.

## Features - `Register.jsx`
- State Management with useState Hook: The component uses the useState hook to manage the form's user information, including username, email, and password.
- Handling User Input: User input for the registration details is managed through controlled form components. As users input their details, the state is updated accordingly.
- Form Submission and API Call: Upon form submission, the handleSubmit function sends a POST request to the server (http://localhost:4000/workoutuser/register) with the user details. Upon a successful response, the user is redirected to the sign-in page.
- Error Handling: Implements basic error handling, displaying alerts in case of failure to create an account or encountering errors during the API call.

## Features - `SignInPage.jsx`
- State Management with useState Hook: The component utilizes the useState hook to manage the form's user information, including username, email, and password.
- Handling User Input: User input for the sign-in details is managed through controlled form components. As users input their details, the state is updated accordingly.
- Form Submission and API Call: Upon form submission, the handleSubmit function sends a POST request to the server (http://localhost:4000/workoutuser/sign-in) with the user details. Upon successful authentication, the user is redirected to the profile page.
- Error Handling: Implements basic error handling, displaying alerts in case of login failure or encountering errors during the authentication process.

## Features - `Profile.jsx`
- State Management with useState Hook: The component utilizes the useState hook to manage the array of workout data (userForm) fetched from the server.
- Fetching User Data with useEffect Hook: Upon component mounting or whenever userForm changes, the useEffect hook sends a GET request to http://localhost:4000/workouts/getfromuser/ followed by the logged-in user's username. The retrieved data populates the userForm state for rendering.
- Displaying User Information: Renders the logged-in user's details such as username and email on the profile page.
- Rendering Workout Cards: The component maps through the userForm array, generating individual WorkoutCard components for each workout associated with the user.

