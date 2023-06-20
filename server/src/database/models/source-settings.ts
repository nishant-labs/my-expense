import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sourceSettingsSchema = new Schema({
	sourceId: String,
	value: String,
});

export const SourceSettingsModel = model('SourceSettings', sourceSettingsSchema);