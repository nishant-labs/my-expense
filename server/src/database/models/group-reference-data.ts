import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const GroupReferenceDataSchema = new Schema({
	groupId: String,
	value: String,
	isEnabled: Boolean,
});

export const GroupReferenceDataModel = model(
	'TransactionGroupReference',
	GroupReferenceDataSchema
);
