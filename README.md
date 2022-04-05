# Net Ninja Build Web Apps with React & Firebase

### Course Repository:

https://github.com/iamshaunjp/React-Firebase

Learn React from the ground up to make dynamic websites (includes Context, Hooks, Reducers, Routing, Auth, Databases)

### What you'll learn

Learn how to create modern & dynamic React websites from the ground up
Learn about Components, Props, Hooks, Context, State, Reducers & the React Router
Learn how to implement a database, authentication & file uploads with React & Firebase
Create & deploy fully fledged user-based React websites

### Description

React is a hugely popular front-end library and React developers are always in hight demand in the web dev job market. In this course you'll learn how to use React from the ground-up to create dynamic & interactive websites, and by the time you finish you'll be in a great position to succeed in a job as a React developer. You'll also have 4 full React projects under your belt too, which you can customize and use in your portfolio!

Throughout the course you'll learn exactly what React is and why it's such a popular choice to make interactive & dynamic websites. You'll learn how to set up a React website from scratch, how to create React components, how to use state to manage component data & how to work with interactive events such as click events & form submissions.

You'll also get hands-on practise with the React Router (which is used in React to create website with "multiple pages") and you'll see how these are actually known as Single Page Applications (or SPA's for short).

We'll dive into React Hooks such as useState, useEffect, useParams & useHistory and use them to help us create 4 full React projects from scratch - a memory game, a recipe website, a finance tracker & a project management application.

You'll also learn some more avanced topics such as the React Context API to handle global state & reducers (including the useReducer hook) to help manage more complex state.

Once you've mastered React, we'll take our websites to the next level by integrating them with Firebase - a backend as a service. You'll learn how to add services such as a real-time database & authentication into your React sites as well as how to allow end-users to upload files from their computers with the help of Firebase Storage. Finally, I'll teach you how to build & deploy your React sites to the web using Firebase Hosting.

By the end of the course you'll have a solid understanding of React & be able to make your own production-ready websites!

Who this course is for:
Beginner developers wanting to learn a front-end framework like React
Beginner React developers wanting to further their React skills & knowledge
Intermediate & advanced React developers wanting to learn how to integrate back-end services like authentication & databases
Developers who have used other frameworks (like Vue) & want to switch to React

# Start Here

## Section 1: Introduction & Setup

### 1. What you should already know

Modern JavaScript Tutorial Playlist:  
https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc

HTML & CSS Crash Course Tutorial Playlist:  
https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G

## Section 2: React Basics

## Folder 1: React Basics

## Section 3: Using Create-React-App

### 1. https://create-react-app.dev/

## Section 4: Intro to State & useState

## Folder 2: state & useState

## Section 5: Components & Props

## Section 6: Styling React Applications

## Section 7: User Input & Events

## Section 8: Fetching Data & useEffect

## Folder 3: tripago

// install the json server
npm install -g json-server

// run the json server
json-server --watch ./data/db.json

## Section 9: Project Build: Memory Game

## Folder 4: memory game

## Section 10: The React Router

## Folder 5: multipage-site

// run the json server
json-server --watch ./data/db.json

// install React Router version 5.1
npm i react-router-dom@5.1

## Section 11: Project Build: Recipe Directory

## Folder 6: cooking-ninja

// run the json server
json-server --watch ./data/db.json

// install React Router version 5.1
`npm i react-router-dom@5.1`

## Section 12: React Context & Reducers

## Section 13: Firebase Firestore

### 1. Firestore Databses

1. Create a firebase account
2. Go to the console menu
3. Create a new project +
4. Give a name to the project
5. Create a Firestore database
6. Choose test mode
7. Choose what ever location your traffic comes from

### 2. Connecting to Firebase

`npm install firebase@8.5`

## Section 14: Project Build: Finance Tracker (with Firebase Authentication)

## Folder 7: my-money

```
npm i react-router-dom@5.1
npm install firebase@8.5
```

### 1. Add Authentication in Firebase

1. Go to the dashboard
2. Click on Authentication
3. Select the email/password option
4. enable the toggle first option

### 2. Create Firebase DataBase

1. Create a Firestore database
2. Choose test mode
3. Choose what ever location your traffic comes from

### 3. Create Firebase Index

When you trying to list transactions in the home component,
you will need to click on the console link to create the index
in the firebase dashboard thats all

## Section 15: Firestore Rules

### 1. The Firebase CLI

1. `npm i -g firebase-tools`
2. `firebase login`
3. Click on the link in the terminal to log in
4. `firebase init`
5. Check this options in the CLI
   // For firestore rules
   X. Firestore: Configure security rules and indexes files for Firestore
   // For deploying the Application
   X. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
6. Enter
7. Please select an option: (Use arrow keys)
   X. Use an existing project
8. Selec the project name associated with the react app (myMoney)
9. What file should be used for Firestore Rules? (firestore.rules)
   Enter to keep the default name
10. What file should be used for Firestore indexes? (firestore.indexes.json)
    Enter to keep the default name
11. What do you want to use as your public directory? (public)
    DON'T USE PUBLIC!
    call it: build
12. Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
    YES
13. Set up automatic builds and deploys with GitHub? (y/N)
    NO

Firebase initialization complete!

### 2. Securing Collection Data

File: `firestore.rules`

### 3. Deploying Firestore Rules

Make sure you are inside the App Folder
This will only deploy the firestore fules
`firebase deploy --only firestore`

## Section 16: Building & Deploying

### 1. Building a React App

`npm run build`

### 2. Deploying to Firebase

`firebase deploy`

### 3. Updating the Site & Re-Deploying

`npm run build`
`firebase deploy`

### 4. Rolling Back Deployments

On the Firebase dashboard, click on Hosting, search for the previous
version you want to rollback, click on the 3 dots on the right of the
version and select RB

## Section 17: Project Build: PMS Project Management Site

### 1. Firebase Setup

1. Go to the firebase console https://console.firebase.google.com/
2. Add project (TheDojoSite)
3. UnClick Google Analytics for this project
4. Register a WebApp, click on the WebApp icon </>
5. Register app (The Dojo)
6. Don't check the Firebase Hosting
7. Click on, the Register App
8. Skip the rest
9. Click on, the 1 app icon below TheDojoSite
10. Click on, the settings icon on the right of TheDojo name
11. Scroll down and click on the config button
12. Copy the firebase config

// Enable DataBase Service

1. Click on, the Firestore Database
2. Click on, Create database button
3. Choose, Start in test mode, NEXT
4. Choose location, southamerica-east1
5. Click, on the Enable button

// Enable Auth Service

1. Click on the Authentication
2. Click on, get started button
3. Choose, Native providers, Email / Password
4. Turn on only the, Email/Password button

// Install the firebase
`npm install firebase@8.5`

### 2. Firebase Init (Rules, Hosting & Storage)

Repeat all the steps in Section 15 in the, 1. The Firebase CLI
to set up all the project

### 3. Router & Pages Setup

// install React Router version 5.1
`npm i react-router-dom@5.1`

### 4. Firebase Storage Setup

I can create folders and subfolders manually
I can upload files manually

1. Initialize the Storage Service in the firebase config file

```
import 'firebase/storage'
const projectStorage = firebase.storage()
export { projectStorage }
```

2. Go to your project in the Firebase console
3. Click on the Storage tab
4. Edit the rules so it let's you work the Storage with no problems

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```

### 5. Adding Firestore Rules

1.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{user_id} {
      allow read, create: if request.auth != null;
      allow update: if request.auth.uid == user_id;
    }
    match /projects/{project_id} {
      allow: read, create, update: if request.auth != null;
      allow: delete: if request.auth.uid == resource.data.createBy.id
    }
  }
}
```

2. Make sure you are inside the App Folder
   This will only deploy the firestore fules
   `firebase deploy --only firestore`

### 6. Final Touches

Library to add special dates
`npm install date-fns`

### 7. Deploying the App

```
npm run build
firebase deploy
```

## Section 18: React with Firebase version 9

## Folder 9: reading-list

### 1. Firebase Config File

Repeat the process we have done before in the previous sections
to config the firebase file

1. Add the project
2. Add the web app, register the app
3. Click on the App icon
4. Click on the Settings icon
5. Click on the Config button
6. Copy the Config
7. Create the firebase/config.js and config it

// Install the firebase 9
`npm install firebase`

### 2. Getting Documents

Create the Firestore Database

1. Go to Firebase console
2. Click the Firestore Database TAB
3. Click the Create database button
4. Choose Start in test mode
5. Choose Cloud Firestore location

// Create Start collection

1. `books`
2.

```
Auto-ID
Field: title
Type: string
Value: the name of the wind
```

```
Auto-ID
Field: title
Type: string
Value: the way of kings
```

```
Auto-ID
Field: title
Type: string
Value: the final empire
```

### 3. Signing Users Up

Enable Authentication Firebase

1. Go to Firebase console
2. Click the Authentication TAB
3. Click the Get started button
4. Choose Native providers: Email/Password
5. Enable Email/Password

### 4. Firebase Further Reading

https://firebase.google.com/docs/build

## Section 19: React Router Version 6

## Folder 10: react-router-6

### 1. Introduction to React Router 6

Starter Project

https://github.com/iamshaunjp/React-Router-Version-6
