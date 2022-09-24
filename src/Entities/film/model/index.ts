import { commonApi, useGetReviewByIdQuery } from "../../../shared/api/apiConfig";
import { FilmType } from "../../../types/FilmType";
import { useAppSelector } from "../../../utils/typedHooks/useAppHooks";

const ReviewApi = commonApi.injectEndpoints({
	endpoints: builder => ({
		getMovieById: builder.query<FilmType, string | undefined>({
			query: id => {
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
	})
})


export const {
	useGetMovieByIdQuery
} = ReviewApi