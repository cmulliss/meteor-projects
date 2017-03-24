
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
    
    let title = 'Score Keep';
    let name = 'Cherry';
    let jsx = (
        <div>
    {/* Renderer h1 tag with title var as text */}
            <h1>{title}</h1>
            <p>Hello {name}!</p>
            <p>Second paragraph</p>
        </div>
);
   ReactDOM.render(jsx, document.getElementById('app'));
});