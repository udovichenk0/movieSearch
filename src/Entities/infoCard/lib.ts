export const textSplitter = (desctiption: string) => {
	return desctiption?.slice(0, 50) + '...'
}

export const ratingColor = (rating: number) => rating >= 5? 'mark__good' : 'mark__bad'