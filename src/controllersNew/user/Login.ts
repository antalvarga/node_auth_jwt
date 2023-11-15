import {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from "../../models/User";

const Login = async( req: Request, res: Response ) => {
  const {email, password } = req.body;

  // Validations 
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

  // Check if user exists
  const userExists = await UserModel.findOne( { email } )

  if ( !userExists ) {
    return(
      res
      .status( StatusCodes.NOT_FOUND )
      .send  (  `{ message: ERRO :: Users :: E-mail não existe }` )
    );
  }

  // Check if password match
  const passwordCrypt = userExists.password ? userExists.password : '';
  const checkPassword = await bcrypt.compare( password, passwordCrypt );

  if ( !checkPassword ) {
    return(
      res
      .status( StatusCodes.UNPROCESSABLE_ENTITY )
      .send  (  `{ message: ERRO :: Users :: Senha inválida }` )
    );
  }

  // 55:07 - Efetivar a autenticação
  try {
    // todo : Criar função para retorar Secret
    const secret = process.env.SECRET ? process.env.SECRET : 'NUMSEY!1234$NANAMBRIUNVALA' ;

    const token  = jwt.sign({
      id: userExists._id
    },
    secret, );

    res
    .status( StatusCodes.OK )
    .send  ( `{message: :: Users :: Autenticado! :: Token: ${token} }` );

  } catch( error ) {
    console.log( error );
    
    res
    .status( StatusCodes.INTERNAL_SERVER_ERROR )
    .send  (  `{ message: ERRO :: Users :: Erro ao efetivar token }` )
  
  }
  
}

export {Login};