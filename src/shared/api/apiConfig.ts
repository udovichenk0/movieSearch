import axios from 'axios'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { FilmType, movieTypes } from '../../types/FilmType';
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

		getFilteredMovies: builder.query<{docs: movieTypes[]}, number>({
			query: (limit) => {
				return `/movie?limit=10&page=1&field=rating.kp&search=1-10&field=year&search=1960-2022&field=typeNumber&search=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
	})
})
export const {
	useGetPersonByIdQuery,
	useGetMoviesByIdQuery,
	useGetReviewByIdQuery,
	useGetMovieByIdQuery,
	useGetFilteredMoviesQuery
} = commonApi

