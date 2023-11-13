import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dbConnection from './infra/db/dbConnection';
import Routes from './routes';

const myPort = process.env.PORT ? process.env.PORT : 3333;

const app = express();

const resultConnection = dbConnection()
.then()
.catch( () => {
  console.log( 'Error! Mongodb Connect');
});

app.use( cors() );
app.use( express.json() );
app.use( Routes );

app.get( '/', (req, res) => {
  console.log( 'Obrigado Deus! Hello world funcionou...');
  res.send( 'Obrigado Deus! Hello world funcionou...');
});

app.listen( 3333, () => {
  console.log( '🚀 Server is running...' );
})