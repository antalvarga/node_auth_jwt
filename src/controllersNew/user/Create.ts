import {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import UserModel from '../../models/User';

const Create = async( req : Request, res: Response ) => {

  const { name, email, password, confirmPassword } = req.body;

  // Validações : TODO usar o yup no final
  if( !name ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: Nome obrigatório }` )
    );
  }
  
  if( !email ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: E-mail obrigatório }` )
    );
  }

  if( !password ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: Senha obrigatória }` )
    );
  }

  if( password !== confirmPassword ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: Senhas diferentes }` )
    );
  }

  // check if user exists
  const userExists = await UserModel.findOne( {email } )

  if ( userExists ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: E-mail existe }` )
    );
  }
  
  // Create password - TODO: Usar functions no final
  const salt = await bcrypt.genSalt( 12 );
  const passwordHash = await bcrypt.hash( password, salt );

  // Create user
  const user = {
    name
    , email
    , password : passwordHash
  }

  try {

    const createdUser = await UserModel.create( user );

    return(
      res
      .status( StatusCodes.CREATED)
      .send  (  `{ message: Criado :: Services :: ${createdUser} }` )
    )

  } catch( error ) {

    // TODO: Criar log de erros da aplicação

    return(
      res
      .status( StatusCodes.INTERNAL_SERVER_ERROR )
      .send  ( `{ message: Erro ao inserir :: Users :: ${error} }` )
    );
  }
}

export {Create};
