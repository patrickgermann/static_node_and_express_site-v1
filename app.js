const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
    res.render('index');
    next();
})


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});