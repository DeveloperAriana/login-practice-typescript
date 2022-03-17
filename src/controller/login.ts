import  {UserModel} from "../models/user"
import { encript } from "../utils/tokens"

export default class Login {

    #email = ''
    #password = ''

    constructor(email:string, password:string){
        this.#email = email
        this.#password = password
    }

    async verifyExist(){
        const userModel = new UserModel({email:this.#email, password:this.#password})
        return userModel.getUser(this.#email)
    }

    async login(){
        let userExist = await this.verifyExist()
        if(!userExist || (this.#password !== userExist.password)) throw new Error('user or password is invalid') //recommended use bcrypt, it's just an example
        return encript(userExist.id,'user')
    }

    async signin(){
        try{
            const userModel = new UserModel({email:this.#email, password:this.#password})
            userModel.createUser(this.#email, this.#password)
        }catch(err){
            console.error(err)
        }
    }
}