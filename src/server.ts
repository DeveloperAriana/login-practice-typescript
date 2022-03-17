import express from 'express'
import dotenv from "dotenv"
import {init} from './config/connection'
import auth from './routes/auth'
import {errorHandler} from './middlewares/error'

let server = express()

dotenv.config({ path: __dirname+'/.env' });

const PORT:number|any = process.env.PORT

server.use('/v1',auth)

server.use(errorHandler)

server.listen(PORT,async () => {
    await init()
    console.log(`listening at port ${PORT}`)
})