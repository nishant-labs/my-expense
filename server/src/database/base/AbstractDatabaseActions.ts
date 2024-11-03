export abstract class AbstractDatabaseActions {
	abstract create(payload: unknown): Promise<unknown>;

	abstract updateById(id: unknown, item: object): Promise<unknown>;

	abstract findAll(table: unknown): Promise<unknown>;
	abstract findById(id: unknown): Promise<unknown>;
	abstract findByFilter(filter: unknown): Promise<unknown>;

	abstract deleteById(id: unknown): Promise<unknown>;
}
