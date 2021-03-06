
# Meteor
- a collection of tools
- How deploy to Heroku
<https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234#.544aymcxv>
 - Uses nodejs on the server
 - npm, al ot of general purpose packages
 - atmospherejs.com for media specific packages
 - MongoDB 

### Install Meteor
- curl https://install.meteor.com/ | sh
    - Meteor 1.4.3.2 has been installed in your home directory (~/.meteor).
Writing a launcher script to /usr/local/bin/meteor for your convenience.  
- meteor --version
- restart terminal then 
    - meteor --version to check did install correctly
- meteor --help
### Getting Started
- meteor create project-name
- it then downloads and installs dependencies    
- cd into project folder
- meteor npm install
- meteor run or just meteor
- don't add files to server or client folders, causes confusion

## Score Keep App
## Andrews working version of Score Keep App
### client, server, public and imports folders
- <http://score-keep-mead.herokuapp.com/>
- and code on github: <https://github.com/andrewjmead/score-keep-meteor-course>
### Directory names
- create directory __imports__, files in this will NOT automatically be loaded
- can also create __public__ folder, public assets available anywhere on server, eg icons, images, SVGs help files etc
- can use __eager loading__  eg automatically loads main.js and any other html, css files which can cause unexpected behaviour. Not using it, not recommended.
- obut are using __lazy loading__ where have to import manually, using the ES6 keyword 'import' to explicitly load in certain files.
- where we do add files will be using  __lazy loading__ and importing them, using the imports folder, using __import__ keyword to explicitly load in certain files.

### Notes
- ES6 uses 'let' rather than 'var'.
## Importing and exporting
- functions in imports folder files, eg math.js
```javascript
export let sum = function(a, b) {
    return (a + b);
};
```
imports in main.js in server and or client
```javascript
import { sum, minus, mult } from './../imports/math';
```
## Advanced importing and exporting
- up to now used only 'named' exports
- now using 'default' exports
- each file that can export, can export __one__ default
- can be an object, function, boolean or string
- can export a function as a default import, in imports folder files
```javascript
export default function(a, b) {
    return (a + b);
};
```
then import into main.js in client or server
## Install React and React-dom (takes our code and renders it to th browser) and exploring JSX
- __meteor npm install react__
- __meteror npm install react-dom__ (versions of both should be same)
- or can do __meteor npm install react__ __react-dom__
- npm --version, and meteor npm --version to show difference between system and bundled versions
- installs into project, in node modules folder, with dependencies
- need to update our package.json file, best done automatically:
- add save flag 
- __meteor npm install react react-dom --save__
- 'save' flag not only installs modules but also updates package.json
- so if node folder gets wiped, or lost on sharing project, or github, then can be regenerated just by using __meteor npm install__ will use stub to replace correct versions.
- make sure everything you install turns up in package.json
### Importing React
- don't need paths for npm libraries (node modules)
- in client/main.html 
```html
<head>
  <title>Score Keep</title>
</head>
<!-- create div to hold our React content -->
<body>
<div id="app"></div>
</body>
```
- in client/main.js
```javascript
//only need library name for node modules, not path
//named exports need {}, meteor in this case, all meteor modules use meteor/meteor
import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

// takes function allows DOM content to be 
// rendered in main.html
// takes function as its only argument
// gets called once the DOM is ready
// going to render some JSX to the screen
Meteor.startup(function() {

});
```
- and import meteor with a path
- summary of imports
1. ./../imports/file
2. 'jquery' (node modules)
3. 'meteor/meteor' to prevent conflicts with similarly named npm modules
### JSX lets us define our components markup within our js files
- both templates and the code that manages them are in the same place
- good for complex apps
- stands for Javascript XML (an extension of the js language)
- lets us define our components markup within our js files
- JSX runs a compiler
- Can use __http://babeljs.io/__ to test code
- Can only have ONE root element in a JSX statement
- wrap in div, which is parent and p's etc are children
- Can wrap div in () to allow proper formatting of content








