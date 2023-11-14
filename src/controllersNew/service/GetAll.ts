import {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

import ServiceModel from '../../models/Service';


const GetAll = async( req: Request, res: Response ) => {
  
  console.log( 'GetAll ' );
  
  try {

    const listServices = await ServiceModel.find();

    console.log( listServices );

    return(
      res
      .status( StatusCodes.OK )
      .send  ( `{ message: List :: Services :: ${ listServices } }` )
    );

  } catch( error ) {

    return(
      res
      .status( StatusCodes.INTERNAL_SERVER_ERROR )
      .send  ( `{ message: Erro ao listar :: Services :: ${error} }` )
    );

  };

}

export { GetAll };
