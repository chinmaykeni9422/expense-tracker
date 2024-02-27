import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema(
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
            default: "expense"
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

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
