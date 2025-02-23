export interface CategoryItem {
	id: number
	name: string
	wagering: number
	bet?: number
	freeSpins?: number
	cost: number
	imageUrl: string
	amount?: number
}

export interface StoreCategory {
	id: number
	categoryName: string
	categoryIcon: string
	categoryItems: CategoryItem[]
}

export const storeItems: StoreCategory[] = [
	{
		id: 1,
		categoryName: 'Free Spin',
		categoryIcon: 'free-spin',
		categoryItems: [
			{
				id: 1,
				name: 'Book of the Fallen',
				wagering: 1,
				bet: 0.5,
				freeSpins: 35,
				cost: 4500,
				imageUrl: '/store/store-1.webp',
			},
			{
				id: 2,
				name: 'Book of the Fallen',
				wagering: 2,
				bet: 0.1,
				freeSpins: 15,
				cost: 2500,
				imageUrl: '/store/store-2.webp',
			},
			{
				id: 3,
				name: 'Book of the Fallen',
				wagering: 3,
				bet: 0.5,
				freeSpins: 45,
				cost: 3500,
				imageUrl: '/store/store-3.webp',
			},
			{
				id: 4,
				name: 'Book of the Fallen',
				wagering: 1,
				bet: 1,
				freeSpins: 55,
				cost: 5500,
				imageUrl: '/store/store-4.webp',
			},
		],
	},
	{
		id: 2,
		categoryName: 'Bonus Cash',
		categoryIcon: 'star',
		categoryItems: [
			{
				id: 1,
				name: 'Small Bonus',
				amount: 10,
				wagering: 5,
				cost: 3000,
				freeSpins: 15,
				bet: 1,
				imageUrl: '/store/store-4.webp',
			},
			{
				id: 2,
				name: 'Medium Bonus',
				amount: 25,
				wagering: 3,
				cost: 6000,
				freeSpins: 15,
				bet: 1,
				imageUrl: '/store/store-2.webp',
			},
			{
				id: 3,
				name: 'Large Bonus',
				amount: 50,
				wagering: 2,
				cost: 10000,
				freeSpins: 15,
				bet: 1,
				imageUrl: '/store/store-3.webp',
			},
		],
	},
]
