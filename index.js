// Import express library
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Require auth routes
require('./routes/authRoutes')(app);

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
