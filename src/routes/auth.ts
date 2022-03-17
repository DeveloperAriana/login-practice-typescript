import {Router, Request, Response, NextFunction} from 'express'
import Login from '../controller/login'

const router = Router()

interface dataLogin{
    email: string,
    password: string
}

router.get('/auth', async(req:Request<{},{},{},dataLogin>, res:Response, next: NextFunction) => {

    try{
        if(!req.query.email || !req.query.password) throw new Error('bad request')

        const login = new Login(req.query.email, req.query.password)
        const token = await login.login()
        res.status(200).send(token)  
    }catch(err){
        next(err)
    }
})

export default router