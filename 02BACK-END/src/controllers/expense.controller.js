import asyncHandler from "../utils/asyncHandler.js";
import Expense from "../models/expense.model.js"
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
    const expense = await Expense.create({
        title,
        amount,
        date,
        category,
        description
    })

    //check for expense creation
    if(!expense){
        throw new APIError(500, "Something went wrong while creating expense object");
    }

    //return response
    res
    .status(201)
    .json(
        new ApiResponse(200, expense, "expense added successfully")
    )

}); 

const getExpense = asyncHandler( async (req, res) => {

    // getting income object
    const expenses = await Expense.find().sort({createdAt: -1});

    //response
    res
    .status(200)
    .json(
        new ApiResponse(200, expenses, "expense got successfully")     
    )

});

const deleteExpense = asyncHandler( async (req, res) => {

    // getting id of documnet from params
    const {id} = req.params ;

    Expense
    .findByIdAndDelete(id)
    .then(() => {
        res
        .status(200)
        .json(new ApiResponse(200, "expense object deleted"))
    })
    .catch(() => {
        throw new APIError(500, "something went wrong while deleting the expense object")
    }) 

});

export {addExpense, getExpense, deleteExpense};