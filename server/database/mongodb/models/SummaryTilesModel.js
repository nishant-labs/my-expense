import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const summaryTilesSchema = new Schema({
    name: String,
    position: Number,
    accountType: String,
    showExpense: Boolean,
    userId: String,
    chartColor: String,
    isEnabled: Boolean,
});
export const SummaryTilesModel = model('summary_tiles', summaryTilesSchema);
