import mongoose, {ConnectOptions} from "mongoose";

const dbConnection = async() => {

  const dbUri = process.env.DB_URI ? process.env.DB_URI : '';

  try {
    
    await mongoose.connect( dbUri, {

      useNewUrlParser: true
      , useUnifiedTopology: true

    } as ConnectOptions );
    
    console.log( `{ message: Mongoose connected :: }` );

  } catch( error ) {
    console.log( `{ message: Erro de conexão :: ${error}}` );
  }
};

export default dbConnection;
