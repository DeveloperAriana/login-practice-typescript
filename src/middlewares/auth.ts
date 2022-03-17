import {Response, Request, NextFunction} from 'express'
import { decode } from '../utils/tokens'

export const authorize = (user:string[]) => async(req:Request,res:Response,next:NextFunction) => {

    try{
        if(!req.headers.authorization) throw 'not-authenticated'
        const result =  decode(req.headers.authorization)

        if(result){
            const data = Object.values(result)
            if(data.length > 2){
                let valid = user.some((role) => role === data[1])
                if(!valid) throw 'not-authorized'
            }else{
                throw 'not-credentials'
            }
        }

        next()
    }catch(err){
        next(err)
    }
}