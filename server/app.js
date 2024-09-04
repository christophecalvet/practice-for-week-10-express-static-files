const express = require('express');
const app = express();
// Your code here

const path = require('path');

//Part1
//app.use(express.static(path.join(__dirname, 'assets')));

//Part 2 error in problem description. Replace ok test by http://localhost:5000/hello-world.js
//app.use(express.static(path.join(__dirname, 'assets/scripts')));


//Part 3
//app.use('/stylesheets',express.static(path.join(__dirname, 'assets/css')));

//Bonus
app.use('/stickers',express.static(path.join(__dirname, 'assets/images')));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
