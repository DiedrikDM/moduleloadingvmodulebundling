# Module Loading v Module Bundling

This project was used as a demo to represent an application that is a bit larger and at one side supports module bundling and at another side supports module loading.
I've used this project on a talk at jsbe.io about this topic.

## Setup
Make sure to run `npm install` before trying out anything at all.
You should create a new [Firebase](https://console.firebase.google.com/?pli=1) application, because this project needs some Firebase database to work correctly. Also you should activate authentication towards that database with [email/password](https://firebase.google.com/docs/auth/web/password-auth) (see #3 in before you begin).
From the root directory go to the src folder and create a secrets folder underneath it. In this folder, you should add a secrets.ts file which should look as follows:
```
export const firebaseConfig = {
    apiKey: '[secret]',
    authDomain: '[secret].firebaseapp.com',
    databaseURL: 'https://[secret].firebaseio.com',
    projectId: '[secret]',
    storageBucket: '[secret]',
    messagingSenderId: '[secret]'
  };
```

The documentation to fill up the secrets can be found [here](https://firebase.google.com/docs/web/setup)

## Module Loading
Run `npm run module-loading` from the command line. It will create an application in the dist folder, by using `gulp`. And then uses `lite-server` to run the application from there.
I needed to make a couple of hacks to angularfire2 and firebase to make it work correctly with systemjs. Maybe I'll create a pull request for angularfire2 to support bundles correctly for systemjs, but for now I didn't. (ping me for more info about it!)

## Module Bundling
You can just use `npm start` which will run the `ng serve` command (from angular-cli). 
