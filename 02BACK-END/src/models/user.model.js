import mongoose , {Schema } from "mongoose"

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        fullname:{
            type: String,
            required: true,
            trim: true
        },
        password:{
            type: Date,
            required: [true, 'Password is required']
        },
        refreshToken:{
            type: String
        }
    }
);

const User = mongoose.model("User", userSchema);

export default User;