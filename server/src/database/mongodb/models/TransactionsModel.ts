import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface ITransaction {
	accountType: string;
	date: Date;
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
