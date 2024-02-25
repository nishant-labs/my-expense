export abstract class AbstractDBActions {
	abstract create<T>(table: unknown, payload: T): Promise<T>;

	abstract updateById<T>(table: unknown, id: unknown, item: object): Promise<T>;

	abstract findAll<T>(table: unknown): Promise<T>;
	abstract findById<T>(table: unknown, id: unknown): Promise<T>;
	abstract findByFilter<T>(table: unknown, filter: unknown): Promise<T>;

	abstract deleteById<T>(table: unknown, id: unknown): Promise<T>;
}
