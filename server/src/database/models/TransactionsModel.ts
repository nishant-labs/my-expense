import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const transactionSchema = new Schema({
	accountType: String,
	date: Date,
	transactionOf: String,
	amount: Number,
});

export const TransactionModel = model('Transactions', transactionSchema);
