import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const userSchema = new Schema({
    id: String,
    password: {
        type: String,
    },
    name: String,
    familyId: {
        type: Schema.Types.ObjectId,
        ref: 'family',
    },
}, { timestamps: true });
export const UserModel = model('users', userSchema);
