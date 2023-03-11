export interface IProduct {
	id: number
	title: string
	price: string
	category: string
	description: number
	rating: {rate: number, count: number}
	images: string
}

export interface IProductDetails {
	product: IProduct
}
