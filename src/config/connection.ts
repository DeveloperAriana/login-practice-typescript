import { connect } from "mongoose";

export async function init() {
   const uri:string | any = process.env.MONGODB_URI
   await connect(uri).catch((error) => {
       console.log(error)
   })
}
