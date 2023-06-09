const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let path = require('path')

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')


})



app.listen(PORT, 'Server connection is failed on Port:' + PORT)