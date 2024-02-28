import { Router } from "express";
import { addIncome, getIncomes, deleteIncome } from "../controllers/income.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Income routes
router.route("/add-income").post(verifyJWT, addIncome);
router.route("/get-incomes").get(verifyJWT, getIncomes); // Updated to getIncomes
router.route("/delete-income/:id").delete(verifyJWT, deleteIncome);

export default router;