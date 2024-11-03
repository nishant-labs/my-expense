import { FilterQuery, Model, ObjectId } from 'mongoose';
import { AbstractDatabaseActions } from '../base/AbstractDatabaseActions.js';

export class MongoDatabaseActions<TDoc> extends AbstractDatabaseActions {
	mongooseModel: Model<TDoc>;

	private constructor(model: Model<TDoc>) {
		super();
		this.mongooseModel = model;
	}

	public static of<TDoc>(model: Model<TDoc>) {
		return new MongoDatabaseActions<TDoc>(model);
	}

	create(payload: Partial<TDoc> | Array<Partial<TDoc>>) {
		return this.mongooseModel.create(payload);
	}
	updateById(id: ObjectId, item: Partial<TDoc>) {
		return this.mongooseModel.findByIdAndUpdate(id, item);
	}
	findAll() {
		return this.mongooseModel.find();
	}
	findById(id: ObjectId) {
		return this.mongooseModel.findById({ _id: id });
	}
	findByFilter(query: FilterQuery<TDoc>) {
		return this.mongooseModel.find(query);
	}
	deleteById(id: ObjectId) {
		return this.mongooseModel.deleteOne({ _id: id });
	}
}
