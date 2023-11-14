import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ServiceModel from '../../models/Service';

const Create = async ( req: Request, res: Response ) => {

  const { name, description, price } = req.body;

  const service = {
    name
    , description
    , price
  }

  try {

    const createService = await ServiceModel.create( service );

    return(
      res
      .status( StatusCodes.CREATED )
      .send  ( `{ message: Criado :: Services :: ${createService} }` )
    );

  } catch( error ) {
    
    return(
      res
      .status( StatusCodes.INTERNAL_SERVER_ERROR )
      .send  ( `{ message: Erro ao inserir :: Services :: ${error} }` )
    );
  };
};

export { Create };
