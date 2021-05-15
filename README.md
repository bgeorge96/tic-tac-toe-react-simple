# Tic-Tac-Toe

This is a sample project to get an idea of what is needed to get an application started with react and how to 
get started with the testing libraries. 

## Helpful links
- Ideology around the different queries that are available in the react testing libaries: https://testing-library.com/docs/queries/about#priority
- Helpful cheatsheet of how to get started with testing: https://testing-library.com/docs/react-testing-library/cheatsheet/
    - This page also includes a very helpful printable cheatsheet that is a single page at: https://github.com/testing-library/react-testing-library/raw/main/other/cheat-sheet.pdf
    - The docs do a good job trying to call out when the application is using async vs sync code for using the await keyword.

## Gotchas
Angular provides a function on the root testing component to refresh the UI. This is available in the react application, but is a bit hidden
in the API. I was able to find a way to rerender with the following code:
```javascript
import {fireEvent, render, screen} from "@testing-library/react";
import {TicTacToe} from "./TicTacToe";

currentPiece = "First Move";
onPlacement = jest.fn();
// initial render would be an empty board
const {rerender} =  render(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece}/>);

// user selecting cell 1 from the board
let cells = await screen.findAllByRole('cell');
fireEvent.click(cells[0]);

// re-rendering to update the UI with the player selection
rerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)

// searching for text and applying assertion
await screen.findByText(/first move/i);
```

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
