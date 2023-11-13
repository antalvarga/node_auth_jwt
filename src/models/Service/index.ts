
import mongoose from "mongoose";
const Schema = new mongoose.Schema( {
    name: {
        type: String
        , required: true
    }
    , description: {
        type: String
        , required: true
    }
    , price: {
        type: Number
        , required: true
    }
    , image: {
        type: String
        , required: false
    }
}
, { timestamps : true }
);
const ServiceModel = mongoose.model( "Service", Schema );
export default ServiceModel;
