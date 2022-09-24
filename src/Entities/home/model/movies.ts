import { commonApi } from "../../../shared/api/apiConfig";
import { cardType } from "./types";
import { useAppSelector } from "../../../utils/typedHooks/useAppHooks";

const newMovies = commonApi.injectEndpoints({
	endpoints: builder => ({
		getNewMovies: builder.query<cardType, number>({
			query: (limit) => {
				return `/movie?limit=${limit}&field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getNewSerials: builder.query<cardType, number>({
			query: (limit) => {
				return `/movie?limit=${limit}&field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=2&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		})
	})
})

const getMovieLimit = () => 
	useAppSelector(state => state.showMoreSlice.filmLimit)


const getSerialLimit = () => 
	useAppSelector(state => state.showMoreSlice.serialLimit)


const getReviewLimit = () => 
	useAppSelector(state => state.showMoreSlice.reviewLimit)


export {
	getMovieLimit,
	getSerialLimit,
	getReviewLimit
}


export const {
useGetNewMoviesQuery,
useGetNewSerialsQuery
} = newMovies