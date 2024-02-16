import mongoose, { ObjectId } from 'mongoose';

const { Schema, model } = mongoose;

export interface IUser {
	id: string;
	password: string;
	name: string;
	familyId: ObjectId;
	createdAt: string;
	updatedAt: string;
}

const userSchema = new Schema<IUser>(
	{
		id: String,
		password: {
			type: String,
		},
		name: String,
		familyId: {
			type: Schema.Types.ObjectId,
			ref: 'family',
		},
	},
	{ timestamps: true },
);

export const UserModel = model('users', userSchema);
