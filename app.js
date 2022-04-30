const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Felipe Hernandez',
    titulo: 'Practica de node'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Felipe Hernandez',
    titulo: 'Practica de node | generic'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Felipe Hernandez',
    titulo: 'Practica de node | elements'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Aplicacion corriendo en el puerto ${port}`);
});