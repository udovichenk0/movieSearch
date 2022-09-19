import { movieTypes } from "../FilmType"

export type MoviesByIdTypeProps = {
	query?: string
	limit?: number
}
export type ReviewByIdTypeProps = {
	id?: string
	limit?: number
}

export type cardType = {
	docs: movieTypes[]
	limit: number
	page: number
	pages: number
	total: number
}