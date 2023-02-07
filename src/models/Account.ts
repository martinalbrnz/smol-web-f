import { Currency } from './Currency'

export default interface Account {
	id: number | string
	name: string
	balance: number
	currency: Currency
}