import Account from '~/models/Account';
import { Currency } from '~/models/Currency';

export const accountsList: Account[] = [
	{
		id: 1,
		name: 'CAJA',
		balance: 4560,
		currency: Currency.ARS
	},
	{
		id: 2,
		name: 'BANCO MIRCO',
		balance: 8272.66,
		currency: Currency.ARS
	},
	{
		id: 3,
		name: 'CAJA USD',
		balance: 690,
		currency: Currency.USD
	},
]