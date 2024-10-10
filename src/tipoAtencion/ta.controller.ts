import { Request, Response} from 'express'
import { orm } from '../shared/db/orm.js'
import { TipoAtencion } from './ta.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try{
    const tipoatencion = await em.find( TipoAtencion, {} )
    res.status(200).json( {message: 'Todos los tipos de atencion fueron encontrados', data: tipoatencion})
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const tipoatencion = await em.findOneOrFail(TipoAtencion, { id })
    res.status(200).json({ message: 'Tipo de atención encontrada exitosamente', data: tipoatencion })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try{
    const tipoatencion = em.create(TipoAtencion, req.body)
    await em.flush()
    res.status(201).json({ message: 'Tipo de atención creada exitosamente', data: tipoatencion })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const tipoatencion = em.getReference(TipoAtencion, id)
    em.assign(tipoatencion, req.body)
    await em.flush()
    res.status(200).json({ message: 'Tipo de atención modificada exitosamente' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const tipoatencion = em.getReference(TipoAtencion, id)
    await em.removeAndFlush(tipoatencion)
    res.status(200).send({ message: 'Tipo de atención borrada exitosamente' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  } 
}

export { findAll, findOne, add, update, remove }