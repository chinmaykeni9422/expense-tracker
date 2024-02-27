import {Router} from "express"
import {registerUser, loginUser, logoutUser, refreshAccessToken} from "../controllers/user.controller.js"

const router = Router();

//user routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(logoutUser)
// router.route("/refresh-token").post(refreshAccessToken)

export default router; 