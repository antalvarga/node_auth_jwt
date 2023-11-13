import { Request, Response } from "express";
import Service from "../../models/Service";


const ServiceControllers = {

   async create ( req : Request, res : Response ) {
      
       try {
          
           const { name, description, price } = req.body;

           const service = {
               name, description, price
           }

           const createdService = await Service.create( service );

           return( res.status( 201 ).send( { createdService, msg: "Serviceo inserido" } ) );

       } catch ( error ) {

           return( res.status(400).send( `::Erro ao inserir serviço ${error}` ) );
       }
   }
   , async index ( req : Request, res : Response ) {

       try {
           const listServices = await Service.find();

           return ( res.status(200).send( {msg: `Lista de serviços ${listServices} `} ) );

       } catch ( error ) {
           return ( res.status( 404 ).send( {msg: `:: Erro ao pesquisar seviços :: ${ error }` } ) )
       }
   }
}

export default ServiceControllers;