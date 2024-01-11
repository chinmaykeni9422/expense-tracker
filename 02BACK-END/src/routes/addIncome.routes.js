import {Router} from "express"
import { addIncome, getIncome, deleteIncome} from "../controllers/income.controller.js";
import {addExpense, getExpense, deleteExpense} from "../controllers/expense.controller.js"

const router = Router();

// routes

// Income routes
router.route("/add-income").post(addIncome);
router.route("/get-incomes").get(getIncome);
router.route("/delete-income/:id").delete(deleteIncome);

// Expense routes
router.route("/add-expense").post(addExpense);
router.route("/get-expenses").get(getExpense);
router.route("/delete-expense/:id").delete(deleteExpense);

export default router; 