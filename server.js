require('dotenv').config(); // this needs to be on line 1
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan');
require("./config/database")



const app = express();

app.use(logger('dev'));
app.use(express.json());


// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));


// This block of code is for testing when setting up your server and such.
// app.get('/test', (req, res) => {
//     res.json({ message: 'Hello im the server' });
//   });


app.use('/api/car', require("./routes/api/car"))
app.use('/api/users', require("./routes/api/users"))


// 'Catch all' route. (the * is necessary). This 
// is necessary to return the index.html on all 
// non-AJAX requests.
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// Configure to use port 3001 instead of 3000 during development
// to avoid collision with React's dev server.
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
})
    