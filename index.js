// Packages

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');
// End of Packages
let scratch = require('./scratch.js');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// Connect with the static files directory
app.use('/static',express.static(__dirname + "/static"));

//Global Variables
convertionResult = 0;
currentCurrency = "";


// Get the root index.html file
app.get('/', (req, res) => {
    res.render('index', {
        conversionResult: convertionResult,
        currentCurrency: currentCurrency
    });
});



// Get the variables form the converter form
app.post("/",scratch);



// Start the server
app.listen(3000, function(){
   console.log('The server is working on port 3000');
});