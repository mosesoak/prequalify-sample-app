This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Loan Prequalification Sample App

### Design Approach

- Adding the following libraries after initial CRA install: `yarn add redux-mock-store @types/redux-mock-store @types/react-test-renderer react-test-renderer @reduxjs/toolkit redux react-redux @types/react-redux`
- Leverage RTK (Redux Toolkit) and React hooks syntax to reduce boilerplate.
  - NOTE: typically in the past I have used React class syntax and Redux `connect()` without RTK, but our projects also had custom code to get type inference in reducers, which RTK provides for free and I'd like to explore in the building of this sample app.
- Set up basic Jest snapshot tests for components and tests for redux and possibly api if time
- Keep everything as simple as possible. I'm not going to use React Final Form, just keep form state in Redux, which I probably wouldn't do in a production app.
- Not going to use a Router, I'll just mock up a simple one.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
