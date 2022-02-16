
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars documentación
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

//servir contenido estatico
app.use(express.static('public')); 

//controlador
app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Bryan Orozco',
      titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
     res.render('generic', {
      nombre: 'Bryan Orozco',
      titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Bryan Orozco',
      titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port, () => {
    console.log(`Example app listening at http//localhost:${port}`)
})