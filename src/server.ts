import express from 'express';

const app = express();


app.get( '/', (req, res) => {
  console.log( 'Obrigado Deus! Hello world funcionou...');
  res.send( 'Obrigado Deus! Hello world funcionou...');
});

app.listen( 3333, () => {
  console.log( '🚀 Server is running...' );
})