import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
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
    const income = {
        title,
        amount,
        date,
        category,
        description,
    }

    try {
        // Find the user by ID
        const user = await User.findById(req.user._id);
    
        // Add the income to the user's incomes array
        user.incomes.push(income);
    
        // Save the updated user document
        await user.save();
    
        // Return success response
        res.status(201).json(
          new ApiResponse(200, user.incomes[user.incomes.length - 1], "Income added successfully")
        );
      } catch (error) {
        throw new APIError(500, "Something went wrong while creating income");
    }

}); 

const getIncome = asyncHandler( async (req, res) => {

    // getting income object
    const user = await User.findById(req.user._id);

    //response
    res
    .status(200)
    .json(
        new ApiResponse(200, user.incomes, "Incomes retrieved successfully")     
    )

});

const deleteIncome = asyncHandler( async (req, res) => {

    // getting id of documnet from params
    const {id} = req.params ;

    try {
        // Find the user by ID
        const user = await User.findById(req.user._id);
    
        // Remove the income with the given id from the user's incomes array
        user.incomes.pull(id);
    
        // Save the updated user document
        await user.save();
    
        // Return success response
        res.status(200).json(new ApiResponse(200, "Income deleted successfully"));
      } catch (error) {
        throw new APIError(500, "Something went wrong while deleting the income");
      }
});

export {addIncome, getIncome, deleteIncome};