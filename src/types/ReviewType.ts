export type ReviewType = {
	docs: {
		author: string
		date: string
		id: number
		movieId: number
		review: string
		reviewDislikes: number
		reviewLikes: number
		title: string
		type:string
		updatedAt: string
		userRating: number
		__v: number
		_id: string
	}[]
	limit: number
	page: number
	pages: number
	total: number
}