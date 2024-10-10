import { Router } from 'express'
import { sanitizePrecioInput, findAll, findOne, add, update, remove } from './precio.controller.js'




const precioRouter = Router()

precioRouter.get('/', findAll)
precioRouter.get('/:id', findOne)
precioRouter.post('/', sanitizePrecioInput,add)
precioRouter.put('/:id', sanitizePrecioInput, update)
precioRouter.patch('/:id', sanitizePrecioInput, update)
precioRouter.delete('/:id', remove)


export {precioRouter};

