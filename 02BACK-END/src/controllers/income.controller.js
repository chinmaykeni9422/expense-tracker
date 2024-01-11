import asyncHandler from "../utils/asyncHandler.js";
import Income from "../models/income.model.js"
import APIError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const addIncome = asyncHandler( async (req, res) =>  {

    const {title, amount, Type, date, category, description} = req.body ;

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
        Type,
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

export {addIncome}