import mongoose, { ObjectId } from 'mongoose';

const { Schema, model } = mongoose;

export interface ITransactionCategory {
	categoryName: string;
	transactionMatchers: Array<string>;
	chartColor: string;
	isEnabled: boolean;
	budget: number;
	sourceId: ObjectId;
}

const TransactionCategoryDataSchema = new Schema<ITransactionCategory>({
	categoryName: String,
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
