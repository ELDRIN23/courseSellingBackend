import e from "express"
import { userRegister } from "../controllers/userController.js"

const router = e.Router()

//signup
router.post("/signup",userRegister);

//login
router.post("/login",);

//profile
router.get("/profile",);

//profile-update
router.put("/profile-update",);

//forgot-password
router.put("/forgot-password",);

//change-password
router.post("/change-password",);

export { router as userRouter };