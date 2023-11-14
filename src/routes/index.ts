import { Router } from 'express';
import ServiceControllers from '../controllers/Service';
import { ServiceControllerNew } from '../controllersNew';

const Routes = Router();

Routes.post( '/service'    , ServiceControllers.create );
Routes.get ( '/service'    , ServiceControllers.index  );

Routes.get ( '/serv'       , ServiceControllerNew.GetAll);
Routes.post( '/serv'       , ServiceControllerNew.Create);

export default Routes;