import jwt from 'jsonwebtoken'

export const generateToken =(id, role)=>{
    try {
        
        var token = jwt.sign({id: id, role: role || 'user'}, "HELLO_WORLD");
        return token;
    } catch (error) {
        console.log(error)
    }
}

// export const verifyToken = (token) => {
//     try {
//         const decoded = jwt.verify(token, "HELLO_WORLD");
//         console.log(decoded)
//         return decoded
        
//     } catch (error) {
//         console.log(error)
//     }
// }