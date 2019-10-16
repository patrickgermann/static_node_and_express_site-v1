const express = require('express');
const app = express();

const indexRoute = require('./routes');
const projectRoute = require('./routes/projects.js');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use("/", indexRoute);

app.use("/projects", projectRoute);

app.get('/about', (req, res, next) => {
    res.render('about');
    next();
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});