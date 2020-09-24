const express = require('express');
const { PORT } = require('./config');
const { HomeRoutes,QuotesRoutes } = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');

const app = express();

app.use(express.static('./public'));

app.use(express.json());

app.use('/',HomeRoutes);
app.use('/',QuotesRoutes);

app.use(NotFoundMiddleware);

app.listen(PORT,()=>{
  console.log(`Corriendo en el puerto : ${PORT}`);
})
