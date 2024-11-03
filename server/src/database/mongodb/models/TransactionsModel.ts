import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export interface ITransaction {
	accountType: string;
	date: string;
	transactionOf: string;
	amount: number;
}

const transactionSchema = new Schema<ITransaction>({
	accountType: String,
	date: Date,
	transactionOf: {
		type: String,
		set: (v: string) => v.trim().replace(/^\s+|\s+$|\s+(?=\s)/g, ' '),
	},
	amount: Number,
});

export const TransactionModel = model('transaction_activities', transactionSchema);
