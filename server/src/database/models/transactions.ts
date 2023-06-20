import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  date: Date,
  groupId: String,
  sourceId: String,
  expenseFlag: Boolean,
  transactionOf: String,
	amount: Number,
});

export const TransactionModel = model('Transaction', transactionSchema);