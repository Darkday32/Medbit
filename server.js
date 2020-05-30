const express = require('express') ;
const bodyParser = require ('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require ('passport');
const path = require('path');

const connectDB = require('./config/db')

const users = require('./routes/users');
const cases = require('./routes/cases');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Init
connectDB();

// Express session midleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());


// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/users', users);
app.use('/cases', cases);

// Server static assets if in production
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
