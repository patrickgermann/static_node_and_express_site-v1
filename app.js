const express = require('express');
const app = express();

const indexRoute = require('./routes');
const projectRoute = require('./routes/projects.js');
const aboutRoute = require('./routes/about.js');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use("/", indexRoute);

app.use("/projects", projectRoute);

app.use("/about", aboutRoute);

app.use((req,res, next) => {
    const err = new Error("Not found.");
    err.status =  404;
    next(err);
});

app.use(( err, req, res, next) => {
res.locals.error = err;
res.status(err.status);
res.render('error');
console.log('There was an error!');
console.log(err.message);
console.log(err.status);
console.log(err.stack);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});