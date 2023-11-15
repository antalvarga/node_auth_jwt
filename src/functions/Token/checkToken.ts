import {Request, NextFunction, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
/*
import { Schema } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';
type TAllSchemas = Record< TProperty, Schema< any > >;
type TGetSchema = <T>( schema : Schema< T > ) => Schema< any >;
type TGetAllSchemas = ( getSchema : TGetSchema ) => Partial< TAllSchemas >;
type TValidation = ( getAllSchemas : TGetAllSchemas ) => RequestHandler;
*/

// function checkToken( req: Request, res: Response, next: RequestHandler ) {
// function checkToken( req: Request, res: Response, next: RequestRedirect ) {
// function checkToken( req: Request, res: Response, next: Request<ParamsDictionary, any, any, QueryString.ParsedQs, Record<string, any>> ) {
// function checkToken( req: Request, res: Response ) {
// const checkToken : TValidation = ( getAllSchemas ) => (req, res, next ) => {

function checkToken( req: Request, res: Response, next: NextFunction) {
  
  const authHeader = req.headers[ 'authorization' ];

  // const token = 'Bearer &*hDH78h7*@...'
  const token = authHeader && authHeader.split(' ')[1];

  console.log( `checkToken :: authheader : ${authHeader} ::` );


  if( !token ) {
    return(
      res
      .status( StatusCodes.UNAUTHORIZED )
      .send  (  `{ message: ERRO :: Users :: Acesso negado }` )
    );
  }

  try {

    // todo : Criar função para retorar Secret
    const secret = process.env.SECRET ? process.env.SECRET : 'NUMSEY!1234$NANAMBRIUNVALA' ;

    jwt.verify( token, secret );

    console.log( `{ message: OK :: Users :: TODO: Como fazer o next() funcionar }` )

    next();

  } catch( error ) {
    console.log( `{ message: ERRO :: Users : Token :: ${ error } }` );
    res
    .status( StatusCodes.UNAUTHORIZED )
    .send  ( `{ message: ERRO :: Users :: Acesso negado }` )
  }
  
}

export {checkToken};


