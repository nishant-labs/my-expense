import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sourceReferenceDataSchema = new Schema({
	sourceId: String,
	value: String,
	isEnabled: Boolean,
});

export const SourceReferenceDataModel = model(
	'TransactionSourceReference',
	sourceReferenceDataSchema
);
