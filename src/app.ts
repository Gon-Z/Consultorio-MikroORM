import 'reflect-metadata'
import express from 'express';
import { secretariaRouter } from './secretaria/secretaria.routes.js';
import { orm, syncSchema } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { consultorioRouter } from './consultorio/consultorio.routes.js';
import { especialidadRouter } from './especialidad/especialidad.routes.js';
import { kinesiologoRouter } from './kinesiologo/kinesiologo.routes.js';


const app = express()
app.use(express.json())

//luego de los middlewares base

app.use((req, res, next) => {
  RequestContext.create(orm.em, next) // em (Entity Manager)
})
//antes de las rutas y middlewares de negocio

app.use('/api/consultorios', consultorioRouter)
app.use('/api/secretarias', secretariaRouter)
app.use ('/api/kinesiologos', kinesiologoRouter)
app.use('/api/especialidades', especialidadRouter)


app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

await syncSchema() //never in production

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})