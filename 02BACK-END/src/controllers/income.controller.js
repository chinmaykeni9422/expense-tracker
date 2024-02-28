import asyncHandler from "../utils/asyncHandler.js";
import Income from "../models/income.model.js"
import APIError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const addIncome = asyncHandler( async (req, res) =>  {

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
    const income = await Income.create({
        title,
        amount,
        date,
        category,
        description
    })

    //check for income creation
    if(!income){
        throw new APIError(500, "Something went wrong while creating income object");
    }

    //return response
    res
    .status(201)
    .json(
        new ApiResponse(200, income, "Income adde successfully")
    )

}); 

const getIncome = asyncHandler( async (req, res) => {

    // getting income object
    const incomes = await Income.find().sort({createdAt: -1});

    //response
    res
    .status(200)
    .json(
        new ApiResponse(200, incomes, "income got successfully")     
    )

});

const deleteIncome = asyncHandler( async (req, res) => {

    // getting id of documnet from params
    const {id} = req.params ;
    Income
    .findByIdAndDelete(id)
    .then(() => {
        res
        .status(200)
        .json(new ApiResponse(200, "income object deleted"))
    })
    .catch(() => {
        throw new APIError(500, "something went wrong while deleting the income object")
    }) 

});

export {addIncome, getIncome, deleteIncome};