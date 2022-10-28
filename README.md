
Or if you want run the app at your local machine, follow the steps bellow:

1. Create a firebase project at [firebase console](https://firebase.google.com/docs/web/setup?authuser=0). You get a config object like this one:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAhfpTDb5JbiW_ePRI2MYngZIA74tf53ho",
  authDomain: "dev-hellobuild.firebaseapp.com",
  projectId: "dev-hellobuild",
  storageBucket: "dev-hellobuild.appspot.com",
  messagingSenderId: "364010412571",
  appId: "1:364010412571:web:f38698a5dae043b813b6be",
  measurementId: "G-LN29R6PW3Q"
};
```

2. Create a Github token [here](https://github.com/settings/tokens) to make requests to GH graphql API.

. Install packages running `yarn install` in the project directory.

Once above steps are completed you can run the following scripts:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

