const express = require('express');
const app = express();

const indexRoute = require('./routes');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use("/", indexRoute);

// app.get('/', (req, res, next) => {
//     res.render('index');
//     next();
// });

app.get('/about', (req, res, next) => {
    res.render('about');
    next();
});

app.get('/project', (req, res, next) => {
    res.render('project');
    next();
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});