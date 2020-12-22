A template React app, intended to interact with an API (e.g. one provided by [Django-REST-Framework](https://www.django-rest-framework.org/)). Dockerized with Rhel7/NodeJS image. You may create a new repository using this as a template by selecting "Use this template" above.

### To test locally

1. Open Docker Desktop.
2. Create an image from the Dockerfile: `docker build -t react-api .`
3. Run `docker-compose up --build`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Included modules

This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and thus includes some packages by default:
* [babel](https://babeljs.io/) for compiling javascript.
* [webpack](https://webpack.js.org/) for module bundling.
* [jest](https://jestjs.io/) for testing.
* [react-scripts](https://www.npmjs.com/package/react-scripts) includes scripts and configuration used by Create React App.
* [react-dom](https://reactjs.org/docs/react-dom.html) provides DOM-specific methods that can be used at the top level of your app.

This project includes several modifications/additions:
* [npm](https://www.npmjs.com/) is used for package management, rather than [yarn](https://yarnpkg.com/).
* [redux](https://redux.js.org/) has been integrated for state management. 
* [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client used to make API calls.
* [lint-staged](https://www.npmjs.com/package/lint-staged) is used for automatic linting. 

### Tools

[Visual Studio Code](https://code.visualstudio.com/) is the recommended text editor for writing javascript. Along with VSCode, these extensions will also be helpful:
* "ES7 React/Redux/GraphQL/React-Native snippets"
* "Prettier - Code Formatter" (Note: because lint-staging is installed, prettier is run automatically whenever you make a git commit.) See also related [React Docs](https://create-react-app.dev/docs/setting-up-your-editor/).

* [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for Google Chrome.

### Additional Resources

* [Full Stack React & Django](https://www.youtube.com/watch?v=Uyei2iDA4Hs) is a 7-part video series that walks through integrating a React front-end with a Django application. This template app has been setup as a front-end app consuming an API provided by a separate back-end but could also be modified to integrate directly with an existing Django app.
* [Jenkins integration](https://medium.com/@elisegev/running-tests-and-creating-code-coverage-reports-for-react-nodejs-project-continuously-with-60312b6a2dd0)
