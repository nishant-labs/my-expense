import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TransactionCategoryDataSchema = new Schema({
	groupName: String,
	transactionMatchers: Array<string>,
	chartColor: String,
	isEnabled: Boolean,
	budget: Number,
	sourceId: {
		type: Schema.Types.ObjectId,
		ref: 'TransactionSourceReference',
	},
});

export const TransactionCategoryDataModel = model('transaction_categories', TransactionCategoryDataSchema);
