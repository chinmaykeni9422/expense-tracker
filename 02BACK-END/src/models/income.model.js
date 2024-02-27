import mongoose, { Schema } from "mongoose";

const incomeSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        amount: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 20
        },
        Type: {
            type: String,
            default: "income"
        },
        date: {
            type: Date,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 20
        }
    },
    {
        timestamps: true
    }
);

const Income = mongoose.model("Income", incomeSchema);

export default Income;
