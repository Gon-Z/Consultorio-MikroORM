import { Router,} from 'express';
import { sanitizeKinesiologoInput, findAll, findOne, add, update, remove} from "./kinesiologo.controler.js";


const kinesiologoRouter = Router();

// Acá definimos las rutas para cada método del controlador
kinesiologoRouter.get('/', findAll)
kinesiologoRouter.get('/:id', findOne)
kinesiologoRouter.post('/', sanitizeKinesiologoInput, add)
kinesiologoRouter.put('/:id', sanitizeKinesiologoInput, update)
kinesiologoRouter.patch('/:id', sanitizeKinesiologoInput, update)
kinesiologoRouter.delete('/:id', remove)

export {kinesiologoRouter};