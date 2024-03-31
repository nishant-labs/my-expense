import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const familySchema = new Schema({
    name: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
    ],
}, { timestamps: true });
export const FamilyModel = model('family', familySchema);
