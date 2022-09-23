import { commonApi } from "../../../shared/api/apiConfig";
import { cardType } from "./types";


const newMovies = commonApi.injectEndpoints({
	endpoints: builder => ({
		getNewMovies: builder.query<cardType, {limit: number}>({
			query: ({limit}) => {
				return `/movie?limit=${limit}&field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getNewSerials: builder.query<cardType, {limit: number}>({
			query: ({limit}) => {
				return `/movie?limit=${limit}&field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=2&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		})
	})
})

export const {
useGetNewMoviesQuery,
useGetNewSerialsQuery
} = newMovies