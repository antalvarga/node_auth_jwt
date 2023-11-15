import mongoose from "mongoose";
const Schema = new mongoose.Schema( {

  name: String
  , email: String
  , password: String

}
, { timestamps : true }
);

const UserModel = mongoose.model( "User", Schema );
export default UserModel;
