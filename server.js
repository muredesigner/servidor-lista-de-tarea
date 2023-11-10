const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Middleware para validar los métodos HTTP de las solicitudes
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  
  if (!validMethods.includes(req.method)) {
    return res.status(400).send('Método HTTP no válido');
  }

  next();
});

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

