
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
- 



