const express = require('express'); //imported express package

const app = express();  // using express as a fucntion (created an application)

const studentRoutes = require('./api/routes/students')
app.use('/students', studentRoutes);
module.exports = app;