import { movieTypes } from "../../../types/FilmType"

export type cardType = {
	docs: movieTypes[]
	limit: number
	page: number
	pages: number
	total: number
}