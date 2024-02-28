import {Router} from "express"
import {addIncome, getIncome, deleteIncome} from "../controllers/income.controller.js";

const router = Router();

// Income routes
router.route("/add-income").post(addIncome);
router.route("/get-incomes").get(getIncome);
router.route("/delete-income/:id").delete(deleteIncome);

export default router; 