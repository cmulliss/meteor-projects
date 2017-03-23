
import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

// takes function allows DOM content to be 
// rendered in main.html
// takes function as its only argument
// gets called once the DOM is ready
// going to render some JSX to the screen
Meteor.startup(function() {
    let jsx = <p>This is from main.js</p>
});