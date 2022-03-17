import { Schema, model } from "mongoose";

interface user{
    id: string,
    email:string,
    password:string
}

interface User {
    email: String,
    password: String,
    getUser(email:string):user,
    createUser(email:string,password:string): any
}


const user = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


user.methods.getUser = async function (email:String){
    try{
        let result = await UserModel.findOne({'email':email})

        if(!result) return null

        return result
    }catch(err){
        throw err
    }
}

user.methods.createUser = async function (email:string,password:string){
    let result = await UserModel.create({'email':email,'password':password})
 
    console.log(result)
 
 }

const UserModel = model<User>('user',user)

export {UserModel}

