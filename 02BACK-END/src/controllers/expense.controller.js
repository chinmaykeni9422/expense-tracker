import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js"
import APIError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const addExpense = asyncHandler( async (req, res) =>  {

    const {title, amount, date, category, description} = req.body ;

    // validation - all field should be filled ('Type' is a exception)
    if(
        [title, amount, date, category, description].some((field) => {
            return field?.trim() === ""
        })
    ){
        throw new APIError(400, "All fields are required");
    }

    //validation for positive amount 
    if(amount <= 0 || !amount === 'number'){
        throw new APIError(200, "amount must be positive");
    }

    //create income object - create entry in db
    const expense = {
        title,
        amount,
        date,
        category,
        description
    }

    // Save the updated user document with the new expense
    await User.findByIdAndUpdate(req.user._id, {
        $push: { expenses: expense }
    });

    // Return response
    res
    .status(201)
    .json(new ApiResponse(200, expense, "Expense added successfully"));


}); 

const getExpense = asyncHandler( async (req, res) => {

    try {
        // Get the user document and return the expenses array
        const user = await User.findById(req.user._id).select("expenses");
        const expenses = user ? user.expenses : [];

        res.status(200).json(new ApiResponse(200, expenses, "Expense got successfully"));
    } catch (error) {
        throw new APIError(500, "Something went wrong while fetching expense");
    }

});

const deleteExpense = asyncHandler( async (req, res) => {

    const { id } = req.params;

    try {
        // Update the user document to remove the specified expense
        await User.findByIdAndUpdate(req.user._id, {
            $pull: { expenses: { _id: id } }
        });

        res.status(200).json(new ApiResponse(200, "Expense object deleted"));
    } catch (error) {
        throw new APIError(500, "Something went wrong while deleting the expense object");
    }

});

export {addExpense, getExpense, deleteExpense};