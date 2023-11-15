import { Router } from 'express';

import ServiceControllers from '../controllers/Service';
import { ServiceControllerNew } from '../controllersNew';
import { UserControllerNew } from '../controllersNew';

import {Token} from '../functions';


const Routes = Router();


Routes.get( '/', (req, res) => { res.send( 'Obrigado Deus! Hello world funcionou...') });

Routes.post( '/service'    , ServiceControllers.create );
Routes.get ( '/service'    , ServiceControllers.index  );

Routes.get ( '/serv'       , ServiceControllerNew.GetAll);
Routes.post( '/serv'       , ServiceControllerNew.Create);



// Register User *** Criar controller ??
Routes.post( '/auth/register', UserControllerNew.Create );
Routes.post( '/auth/login'   , UserControllerNew.Login  );

// Private Route
Routes.get( '/user/:id'      , Token.checkToken, UserControllerNew.Private );



export default Routes;