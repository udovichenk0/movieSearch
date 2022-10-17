import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { FilmType } from '../../types/FilmType';
import { PersonType } from '../../types/PersonType';
import { ReviewType } from '../../types/ReviewType';
import { MoviesByIdTypeProps, ReviewByIdTypeProps } from '../../types/someTypes/someTypes';



export const commonApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.kinopoisk.dev'}),
	endpoints: builder => ({
		getPersonById: builder.query<PersonType, string | undefined>({
			query: id => `/person?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
		}),
		getMoviesById: builder.query<{docs: FilmType[]}, MoviesByIdTypeProps>({
			query: ({query, limit}) => {
				return `/movie?${query}&limit=${limit}&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getReviewById: builder.query<ReviewType,ReviewByIdTypeProps>({
			query: ({id, limit}) => {
				return `/review?search=${id}&field=movieId&limit=${limit}&page=1&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getMovieById: builder.query<FilmType, string | undefined>({
			query: id => {
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		searchMovie: builder.query<{docs: FilmType[]}, {title: string, tab: number}>({
			query: ({title,tab}) => {
				return `/movie?field=name&search=${title}&isStrict=true&field=typeNumber&search=${tab}&limit=10&token=${import.meta.env.VITE_TOKEN}`
			},
		}),
	})
})


//https://api.kinopoisk.dev/movie?field=name&search=Бэтмен&field=typeNumber&search=1&limit=10&token=P1KCK9Y-R26MMAG-NCCF0W3-XXWKWA7
export const {
	useGetPersonByIdQuery,
	useGetMoviesByIdQuery,
	useGetReviewByIdQuery,
	useGetMovieByIdQuery,
	useSearchMovieQuery
} = commonApi

