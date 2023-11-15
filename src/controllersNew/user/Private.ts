// Teste 
// POC
import {Request, RequestHandler, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

import UserModel from "../../models/User";


const Private = async( req: Request, res: Response ) => {

  const id = req.params.id;

  //console.log( 'Private ');

  // check if user exists
  let userExists;
  try {
    userExists = await UserModel.findById( id, '-password' );

  } catch( error ) {
    return(
      res
      .status( StatusCodes.NOT_FOUND )
      .send  (  `{ message: ERRO :: Users :: Usuário não existe }` )
    );
  }

  return(
      res
      .status( StatusCodes.OK )
      .send  (  `{ message: OK :: Users :: ${userExists} }` )      
    );

};

export {Private};