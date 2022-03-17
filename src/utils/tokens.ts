import { sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";


interface session {
    id: string,
    role: string,
    issued: number,
    expires: number
}

export function encript(id:string,role:string){

    try{
        const secret: any = process.env.SECRET
        const signOptions: SignOptions = {
        algorithm: 'HS512',
        expiresIn: '15m'
        }
        const now:number = Date.now()
        const expiresTime = 15 * 60 * 1000
        const expires = now + expiresTime
        const session:session = {
            id:id,
            role:role,
            issued: now,
            expires: expires
        }

        return {
            token: sign(session,secret, signOptions)
        }
    }catch(err){
        throw err
    }
}

export function decode(token:string): any  {
    try{
        const secret: any = process.env.SECRET
        const verifyOptions:VerifyOptions = {
            algorithms: ['HS512']
        }

        let payload = verify(token,secret,verifyOptions)

        return payload
    }catch(err){
        throw err
    }
}