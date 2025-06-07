import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const transactionSchema = new Schema({
    accountType: String,
    date: Date,
    transactionOf: {
        type: String,
        set: (v) => v.trim().replace(/^\s+|\s+$|\s+(?=\s)/g, ' '),
    },
    amount: Number,
});
export const TransactionModel = model('transaction_activities', transactionSchema);
