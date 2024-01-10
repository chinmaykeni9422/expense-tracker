import {Router} from "express"
import { addIncome } from "../controllers/income.controller.js";

const router = Router();

router.route("/add-income").post(addIncome);

export default router; 