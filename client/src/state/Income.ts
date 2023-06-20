import { makeObservable, observable, computed, action } from 'mobx';

class Income {
	id = Math.random();
	@observable salary = 0;
	@observable otherSource = 0;

	constructor() {
		makeObservable(this);
	}

	@action
	addSalary(salary: number) {
		this.salary = salary;
	}

	@action
	addIncomeFromOtherSource(otherSource: number) {
		this.otherSource = otherSource;
	}

	@computed
	get totalIncome() {
		return this.salary + this.otherSource;
	}

	@computed
	get currentMonthSalary() {
		return this.salary;
	}

	@computed
	get currentMontOtherIncome() {
		return this.salary;
	}
}

const income = new Income();
export type IncomeType = typeof income;
export const incomeState = income;
