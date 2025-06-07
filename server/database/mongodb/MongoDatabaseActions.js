import { AbstractDatabaseActions } from '../base/AbstractDatabaseActions.js';
export class MongoDatabaseActions extends AbstractDatabaseActions {
    mongooseModel;
    constructor(model) {
        super();
        this.mongooseModel = model;
    }
    static of(model) {
        return new MongoDatabaseActions(model);
    }
    create(payload) {
        return this.mongooseModel.create(payload);
    }
    updateById(id, item) {
        return this.mongooseModel.findByIdAndUpdate(id, item);
    }
    findAll() {
        return this.mongooseModel.find();
    }
    findById(id) {
        return this.mongooseModel.findById({ _id: id });
    }
    findByFilter(query) {
        return this.mongooseModel.find(query);
    }
    deleteById(id) {
        return this.mongooseModel.deleteOne({ _id: id });
    }
}
