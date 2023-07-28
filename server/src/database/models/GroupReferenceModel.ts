import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const GroupReferenceDataSchema = new Schema({
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

export const GroupReferenceDataModel = model('TransactionGroupReference', GroupReferenceDataSchema);
