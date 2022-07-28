const express = require('express');
const { default: knex } = require('knex');
const { reset } = require('nodemon');
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/more', (req, res) => {
    res.render('more')
})

app.get('/rules', (req, res) => {
    res.render('rules')
})

app.get('/store', (req, res) => {
    res.render('store')
})


app.listen(3000, () => console.log('Server is listening on port 3000'));