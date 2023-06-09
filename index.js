const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let path = require('path')

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/en', (req, res) => {
    res.render('en')
})




app.listen(PORT, () => console.log(`Server is working on port:${PORT}`))