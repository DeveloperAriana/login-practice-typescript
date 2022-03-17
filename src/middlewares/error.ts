import { Request, Response, NextFunction } from "express"
import { JsonWebTokenError } from "jsonwebtoken"

export const errorHandler = (err:Error|JsonWebTokenError, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof JsonWebTokenError) res.status(400).send('unknown error')
    res.status(400).send(err.message)
}