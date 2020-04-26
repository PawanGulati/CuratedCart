# CuratedCart :shopping:
## A Shopping App - Reactjs + Redux + Firebase 

<b>LIVE:</b> http://curated-cart.herokuapp.com/
### A simple eCommerce shopping application built in React, Redux, Firebase and Stripe
___

![alt Text](https://github.com/PawanGulati/CuratedCart/blob/master/client/src/assets/snaps/snap1.PNG "ShopPage")
___

## Payment integrated with `Stripe`
![alt Text](https://github.com/PawanGulati/CuratedCart/blob/master/client/src/assets/snaps/snap2.PNG "CheckoutPage")
___

## Fully `Responsive` N `Material UI` integrarted
![alt Text](https://github.com/PawanGulati/CuratedCart/blob/master/client/src/assets/snaps/snap3.PNG "HomePage")
___

## Tech Used
- [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) - best way to start building a new single-page application in React
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux + React-Redux](https://redux.js.org/basics/usagewithreact) - State container for JavaScript apps
- [Material UI](https://material-ui.com/) - React components that implement Google's Material Design
- [Stripe](https://stripe.com/) - The new standard in online payments
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Firebase](https://firebase.google.com/) - A Mobile and web application development platform developed by Firebase Google
- [Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - provides power-ups for your Redux development workflow
- [React-devtools](https://github.com/facebook/react-devtools) - lets to inspect the React component hierarchy, including component props and state
- [redux-persist](https://github.com/rt2zz/redux-persist) - persist and rehydrate a redux store
- [reselect](https://github.com/reduxjs/reselect) - Selector library for Redux
- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - Collection set of react-spinner for async operation

## Install

For running this project on your local machine:

- [Node.js](https://nodejs.org/en/download/) is required.

- Clone repo from [master branch](https://github.com/PawanGulati/CuratedCart/)

- Then execute the following command on your terminal in the project directory:

> NOTE : You should be inside CuratedCart directory and server.js file should be there

```
$ npm install 
$ npm install --prefix client
```

- Add your own firebase config to firebase.utils.js don't screw my db

- Next you can run the application on your localhost:

> Below command is there for running front end with backend(for stripe), So to access stripe payments add your Stripe Secret Key in .env as STRIPE_SECRET_KEY

```bash
$ npm run dev
```

>To run this without backend
```
$ npm run client
```

- Build for production:

```bash
$ npm run build
```

## Authors
> Pawan Gulati

> Akash Solanki https://github.com/akashsolanki1101
