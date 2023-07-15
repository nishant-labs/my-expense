import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sourceReferenceDataSchema = new Schema({
	sourceName: String,
	transactionMatchers: Array<String>,
	chartColor: String,
	isEnabled: Boolean,
});

export const SourceReferenceDataModel = model(
	'TransactionSourceReference',
	sourceReferenceDataSchema
);
