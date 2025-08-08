// import { verifyToken } from "./token"
import jwt from 'jsonwebtoken'

export function userAuth(req, res, next) {
   try {
    const token = req.headers.authrization
    console.log(token)
    if(!token){
        return res.status(400).json({message: "please login first"})
    }
    const decode = jwt.verify(token, "HELLO_WORLD")
    console.log(decode)
    if(!decode){
        return res.status(400).json({message: "please login first"})
    }
    req.user = decode
    next()
   } catch (error) {
    console.log(error.message)
   }
}