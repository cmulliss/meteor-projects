console.log('Log from  /imports/utils.js');

//using let instead of var with ES6, and ES6 function keyword
// using export lets any file that wants to use it and the functions within it
export let greetUser = function() {
    return 'Hello user!';
};

export let name = 'Cherry Mulliss';
