import {Router} from "express"
import {addExpense, getExpense, deleteExpense} from "../controllers/expense.controller.js"

const router = Router();

// Expense routes
router.route("/add-expense").post(addExpense);
router.route("/get-expenses").get(getExpense);
router.route("/delete-expense/:id").delete(deleteExpense);

export default router; 