const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

const env = new nunjucks.Environment();

const fs = require('fs')
const path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/public'));
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('Home.html')
});

app.get('/about', (req, res) => {
    res.render('About.html')
});

app.get('/7a', (req, res) => {
    res.render('7A.html')
});

app.get('/7b', (req, res) => {
    res.render('7B.html')
});

app.get('/7c', (req, res) => {
    res.render('7C.html')
});

app.get('/7d', (req, res) => {
    res.render('7D.html')
});

app.get('/7e', (req, res) => {
    res.render('7E.html')
});

app.get('/7f', (req, res) => {
    res.render('7F.html')
});

app.get('/7g', (req, res) => {
    res.render('7G.html')
});

app.get('/7h', (req, res) => {
    res.render('7H.html')
});

app.get('/7i', (req, res) => {
    res.render('7I.html')
});

app.get('/7j', (req, res) => {
    res.render('7J.html')
});


app.listen(port, () => {
    console.log(`Vividha Website Initiated On Port ${port}`)
})