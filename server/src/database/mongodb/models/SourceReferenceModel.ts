import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export interface ISourceReference {
	sourceName: string;
	chartColor: string;
	isEnabled: boolean;
	isExpense: boolean;
}

const sourceReferenceDataSchema = new Schema<ISourceReference>({
	sourceName: String,
	chartColor: String,
	isEnabled: Boolean,
	isExpense: Boolean,
});

export const SourceReferenceDataModel = model('transaction_source_reference', sourceReferenceDataSchema);
