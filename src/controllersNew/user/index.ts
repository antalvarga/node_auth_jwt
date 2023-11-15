import * as Create from './Create';
import * as Login  from './Login';
import * as Private from './Private';
 
export const UserControllerNew = {
  ...Create,
  ...Login,
  ...Private
};

