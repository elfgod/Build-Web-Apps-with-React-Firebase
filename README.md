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

### 1.
