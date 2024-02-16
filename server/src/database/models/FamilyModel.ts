import mongoose from 'mongoose';
import { IUser } from './UserModel';

const { Schema, model } = mongoose;

export interface IFamily {
	name: string;
	owner: IUser;
	members: Array<IUser>;
	createdAt: string;
	updatedAt: string;
}

const familySchema = new Schema<IFamily>(
	{
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
	},
	{ timestamps: true },
);

export const FamilyModel = model('family', familySchema);
