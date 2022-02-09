# SmartSMEAR Front

This repository contains sources for SmartSMEAR front end application, implemented in React.

## Environment variables

Set the following environment variables at build time in order to configure the application against different
environments.

| Variable                     | Required | Description                         |
| ---------------------------- | -------- | ----------------------------------- |
| REACT_APP_API_URL            | true     | URL used to contact the API server. |
| REACT_APP_METRICS_SCRIPT_URL | false    | URL pointing to fairdata metrics tracking script. When not specified, browser tracking is disabled |

## Docker

The repository contains Dockerfiles for both local development and production deployment in OpenShift.

### Development with Docker

Run the following command to build the development docker image:
```
docker build . -f Dockerfile.dev -t smear-frontend:dev
```

After the image is successfully built, start a local development server by running the following command:
```
docker run --rm -v $PWD:/app -p 3000:3000 -it smear-frontend:dev
```

### Production deployment in OpenShift

Application can be deployed to OpenShift by using `oc new-app` command. Specify the wanted environment variables either
inline (as below) or by using an environment variable file passed to the `new-app` command.

```
oc new-app https://github.com/cscfi/smear-frontend.git -e "REACT_APP_API_URL"="https://smear-api.example.com" --allow-missing-images
```

After the application is created, you may want to expose the application with an edge route, by running the following
command:
```
oc create route edge --service=smear-frontend
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
