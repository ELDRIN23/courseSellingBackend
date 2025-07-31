import e from "express"

const router = e.Router()

//signup
router.post("/signup", mentorRegister);

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

export { router as mentorRouter };