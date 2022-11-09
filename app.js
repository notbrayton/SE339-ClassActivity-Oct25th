import express from 'express';
import { collectDefaultMetrics, register } from 'prom-client';
import bodyParser from 'body-parser';

collectDefaultMetrics();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(4001, function(){
  console.log("SERVER STARTED ON localhost: 4001")
});