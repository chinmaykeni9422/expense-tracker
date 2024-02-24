import {Router} from "express"
import {registerUser, loginUser, logoutUser, refreshAccessToken} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//user routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT ,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

// dashboard page
router.route("/dashboard").get(verifyJWT, (req, res) => {
    res.send(req.user);
})

router.route("/Income").get(verifyJWT, (req, res) => {
    res.send(req.user);
})

router.route("/Expense").get(verifyJWT, (req, res) => {
    res.send(req.user);
})

export default router; 