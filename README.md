# Set up project:
- clone the repo
- run these commands to install node modules 
```bash
cd dashboardAssessment
npm i
```
- to run the project on local host
```
npm start
```

# About use of redux

I have used redux as a state store so components "Data" and "Modal" access and communicate shared data without going through parent's props. 

# Folder structure
- src/containers/ : has all the containers or views. Currently the project only has one view. Each view has its own folder with js and css files.
- src/components/  : has all the components that are used throughout. Inside folders if they are used on one container.
- src/redux/ : Has all the redux code. reducers have a seperate folder. actions and selectors are in on js file since the scope of the project is small. Store js is where the store is registered with the browser and stored through persistent storage. The store created is imported in App.js and bound for the entire app there.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

