import { Router } from 'express';
import ServiceControllers from '../controllers/Service';

const Routes = Router();

Routes.post( '/service'    , ServiceControllers.create );
Routes.get(  '/service'    , ServiceControllers.index  );

export default Routes;