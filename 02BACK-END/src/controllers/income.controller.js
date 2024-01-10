import asyncHandler from "../utils/asyncHandler.js"

const addIncome = asyncHandler( async (req, res) =>  {
    res
    .status(200)
    .json({
        message: "ok"
    })
}); 

export {addIncome}