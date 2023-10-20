# Movie App, using React with Redux and RESTful API 

Welcome to the Movie App, a powerful movie information application built with React.js and Redux.

## Overview

The Movie App is your gateway to the world of cinema. It's designed to provide you with extensive movie details, popular movies, and more. This application employs a modern tech stack, including React hooks for dynamic user interfaces, Redux for efficient state management, and RESTful API calls to fetch movie data from [themoviedb.org](https://www.themoviedb.org/).

## Key Features

- **React Hooks:** Utilize the latest React features to create a user-friendly interface that's responsive and efficient.

- **Redux:** Efficiently manage and share global state across your application, ensuring smooth data flow.

- **RESTful API:** Fetch up-to-date movie information from [themoviedb.org](https://www.themoviedb.org/) to provide your users with the latest data.

- **React Components:** Understand the concept of components in React and how to create and use them.

- **State and Props:** Learn how to manage state and pass data between components using props.

- **Event Handling:** Explore how to handle user interactions and events in a React application.

- **Lifecycle Methods:** Gain insights into React component lifecycle and how to use lifecycle methods.

- **Conditional Rendering:** Learn how to conditionally render components based on state and user actions.

## Technologies Used & Dependencies

The Movie App is built using the following technologies:

- **React.js:** The foundational library for building user interfaces.
- **Redux:** A powerful state management library for maintaining a consistent application state.
- **React-Redux:** A bridge between React and Redux for seamless integration.
- **Axios:** A promise-based HTTP client for making API requests.
- **Bootstrap:** Used for creating stylish and responsive user interface components.
- **React Router:** Facilitates navigation within the app.

The project also relies on the following dependencies:

- **react-router-dom**
- **react-bootstrap**
- **react-reveal**
- **redux-thunk**
- **react-paginate**

## Getting Started

To start exploring the world of movies with the Movie App, follow these simple steps:

### Prerequisites

- Ensure you have Node.js and npm installed. You can download them [here](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/YNS-JNS/Movie-App-React-Redux.git
    cd Movie-App-React-Redux
    ```

    OR

    **Download and Extract the ZIP:**

    [Download ZIP](https://github.com/YNS-JNS/Movie-App-React-Redux/archive/main.zip)

2. **Install Dependencies:**

    ```bash
    npm install
    ```

### Usage

#### NB:

To use the Movie App and access movie data, follow these steps:

- **Create an Account**: Visit [themoviedb.org](https://www.themoviedb.org/) and create an account if you don't have one.

- **Get an API Key**: After creating an account, you'll need to generate an API key. You can usually find this option in your account settings or developer dashboard on their website.

- **Replace API Key**: In your project, locate the file or configuration where the API key is used. Replace the placeholder `<your_api_key>` with the API key you obtained in step 2.

By following these steps, you'll be able to utilize the Movie App and access movie data from themoviedb.org.

**Note**: Ensure that you keep your API key secure and do not share it publicly.


3. **Start the Application:**

    ```bash
    npm start
    ```

4. **Explore the App:**

    Visit [http://localhost:3000](http://localhost:3000) in your web browser to see the app.

#### Then:
1. **Browse the latest popular movies.**
2. **Search for specific movies by title.**
3. **View detailed movie information, including cast, reviews, and more.**

## Project Structure

The Movie App is organized as follows:

- `src/components`: Contains React components.
- `src/images`: Stores images used in the application.
- `src/redux/`: This folder houses the core Redux structure, including:
  - `actions`: Contains Redux action creators.
  - `reducers`: Contains Redux reducers.
  - `stores`: Where the Redux store is configured.
  - `types`: Defines action types and constants.
- `src/App.js`: The main application component responsible for orchestrating the app's functionality.
- `public`: Contains static assets and the `index.html` file for the application's entry point.


Feel free to explore and modify the code to understand how React components work together.

## Author

This Menu App App was created with ❤️ by [AIT M'BAREK Youness](https://github.com/YNS-JNS).

## Learn More

- React Documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)

## Contribution

If you find issues or want to contribute, follow these steps:

1. Fork the project.
2. Create a branch for your feature: `git checkout -b feature/NewFeature`.
3. Commit your changes: `git commit -m "Add New Feature"`.
4. Push to the branch: `git push origin feature/NewFeature`.
5. Open a pull request.
