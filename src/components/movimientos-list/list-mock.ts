import Movement from '@models/Movement'
import { Currency } from '~/models/Currency'

export const movementList: Movement[] = [
	{
		id: 1,
		account: 'CAJA',
		amount: 360.22,
		currency: Currency.ARS,
		date: new Date(2023, 0, 9, 14, 10),
		description: 'Venta de cantos por metro',
		type: 'input'
	},
	{
		id: 2,
		account: 'CAJA',
		amount: 786.66,
		currency: Currency.ARS,
		date: new Date(2023, 0, 9, 14, 45),
		description: 'Compra de insumos para lámparas',
		type: 'output'
	},
	{
		id: 3,
		account: 'CAJA',
		amount: 1499.99,
		currency: Currency.ARS,
		date: new Date(2023, 0, 9, 15, 42),
		description: 'Venta de mesa de luz desmontable',
		type: 'input'
	},
]