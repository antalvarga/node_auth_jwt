import { Router } from 'express';
import ServiceControllers from '../controllers/Service';
import { ServiceControllerNew } from '../controllersNew';

const Routes = Router();


Routes.get( '/', (req, res) => { res.send( 'Obrigado Deus! Hello world funcionou...') });

Routes.post( '/service'    , ServiceControllers.create );
Routes.get ( '/service'    , ServiceControllers.index  );

Routes.get ( '/serv'       , ServiceControllerNew.GetAll);
Routes.post( '/serv'       , ServiceControllerNew.Create);



export default Routes;