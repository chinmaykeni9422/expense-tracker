import asyncHandler from "../utils/asyncHandler.js";
import APIError from "../utils/ApiError.js";
import User from "../models//user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

// token generator method
const generateAccessAndRfeshTokens = async(userId) => {
    try {
        const AuthUser = await User.findById(userId)
        const accessToken = AuthUser.generateAccessToken()
        const refreshToken = AuthUser.generateRefreshToken()

        AuthUser.refreshToken = refreshToken
        await AuthUser.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
        throw new APIError(500, "samething went wrong while generating refresh and access token")
    }
};

// register controller
const registerUser = asyncHandler( async (req, res) => {

    // get user details from frontend
    const {username, email, fullname, password} = req.body

    // validation - not empty (NEW "some" method lerned)
    if(
        [username, email, fullname, password].some((field) => {
            return field?.trim() === ""
        })
    ){
        throw new APIError(400, "All fields are required")
    }

    // check if user already exits - email/username (new "$or" operator lerned)
    const existedUser = await User.findOne({
        $or:[{username}, {email}]
    })

    if(existedUser){
        throw new  APIError(409, "User with email or username already exists")
    }

    // create user object - create entry in db
    const user = await User.create({
        username,
        email,
        fullname,
        password
    })

    // remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    //check for user creation 
    if(!createdUser){
        throw new APIError(500, "somthing went wrong while registering the user")
    }

    // return response 
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered succesfully")
    )

});

// login controller
const loginUser = asyncHandler( async (req, res) => { 

    // get user details from frontend
    // username or email
    // find the user 
    // password check
    // acces and refresh token
    // send cookie

    const {email, password} = req.body

    if(!email){
        throw new APIError(400, "email is required")
    }

    const user = await User.findOne({email}) ;

    if(!user){
        throw new APIError(404,"user does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new APIError(401, "password does not exist")
    }

    const {accessToken, refreshToken} = await generateAccessAndRfeshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: {
                    ...loggedInUser.toObject(),
                    expenses: user.expenses,
                    incomes: user.incomes,
                }, 
                accessToken, 
                refreshToken
            },
            "User Logged in Succesfully"
        )
    )

});

// logout controller
const logoutUser = asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json( new ApiResponse(200, {}, "user logged Out"))
});

//--
const refreshAccessToken = asyncHandler( async (req, res) =>{
    const inComingRefreshToken = req.cookie.refreshToken || req.body.refreshToken

    if(!inComingRefreshToken){
        throw new APIError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            inComingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new APIError(401, "Invalid refresh token")
        }
    
        if(inComingRefreshToken !== user?.refreshToken){
            throw new APIError(401, "Refresh token is expired")
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRfeshTokens(user._id)
    
        return res
                .status(200)
                .cookie("accessToken", accessToken, options)
                .cookie("refreshToken", newRefreshToken, options)
                .json(
                    new ApiResponse(
                        200,
                        {accessToken, refreshToken: newRefreshToken},
                        "Access token refreshed"
                    )
                )
    } catch (error) {
        throw new APIError(401, error?.message || "Invalid refresh token")
    }

})

export {registerUser, loginUser, logoutUser, refreshAccessToken};