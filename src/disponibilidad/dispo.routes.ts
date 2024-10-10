import {Router} from 'express';
import {sanitizedInput,findAll, findOne, add, update, remove} from './dispo.controller.js';



const dispoRouter = Router();

dispoRouter.get('/', findAll)
dispoRouter.get('/:id', findOne)
dispoRouter.post('/', sanitizedInput, add)
dispoRouter.put('/:id', sanitizedInput, update)
dispoRouter.patch('/:id', sanitizedInput, update)
dispoRouter.delete('/:id', remove)

export {dispoRouter};
