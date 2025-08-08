import e from "express"
import { userLogin, userRegister } from "../controllers/userController.js"
import { userAuth } from "../utils/userAuth.js";

const router = e.Router()

//signup
router.post("/signup", userRegister);

//login
router.post("/login",userLogin); 
router.post("/hello", userAuth, (req, res) => {
    console.log(req.user, "===============")
     res.send("hello")
     })

//profile
// router.get("/profile",);

//profile-update
// router.put("/profile-update",);

//forgot-password
// router.put("/forgot-password",);

//change-password
// router.post("/change-password",);

export { router as userRouter };