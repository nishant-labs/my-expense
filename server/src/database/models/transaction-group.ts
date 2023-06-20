import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const transactionGroupSchema = new Schema({
  groupId: String,
  
	value: String,
});

export const SourceSettingsModel = model('SourceSettings', transactionGroupSchema);