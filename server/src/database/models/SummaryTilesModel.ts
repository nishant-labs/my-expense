import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export interface ISummaryTile {
	name: string;
	position: number;
	accountType: string;
	showExpense: boolean;
	userId: string;
	chartColor: string;
	isEnabled: boolean;
}

const summaryTilesSchema = new Schema<ISummaryTile>({
	name: String,
	position: Number,
	accountType: String,
	showExpense: Boolean,

	userId: String,
	chartColor: String,
	isEnabled: Boolean,
});

export const SummaryTilesModel = model('summary_tiles', summaryTilesSchema);
