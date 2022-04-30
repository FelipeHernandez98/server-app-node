const express = require('express')
const app = express()
const port = 3000;

//Servir contenido estatico
app.use(express.static('public'));


app.get('/hola-mundo',  (req, res) =>{
    res.send('Hello World')
  })

  app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/public/404.html');
  });

app.listen(port,()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`);
});