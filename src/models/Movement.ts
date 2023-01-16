import { Currency } from './Currency'

export default interface Movement {
	id: number | string
	date: Date
	account: string
	amount: number
	description: string
	currency: Currency
	type: 'input' | 'output'
}