import { commonApi, useGetReviewByIdQuery } from "../../../shared/api/apiConfig";
import { useAppSelector } from "../../../shared/lib";
import { FilmType } from "../../../types/FilmType";


const ReviewApi = commonApi.injectEndpoints({
	endpoints: builder => ({
		getMovieById: builder.query<FilmType, string | undefined>({
			query: id => {
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
	})
})
export const getReviewLimit = () => 
	useAppSelector(state => state.showMoreSlice.reviewLimit)

export const {
	useGetMovieByIdQuery
} = ReviewApi