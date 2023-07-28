import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sourceReferenceDataSchema = new Schema({
	sourceName: String,
	chartColor: String,
	isEnabled: Boolean,
	isExpense: Boolean,
});

export const SourceReferenceDataModel = model(
	'TransactionSourceReference',
	sourceReferenceDataSchema
);
