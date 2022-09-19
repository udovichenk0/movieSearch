import axios from 'axios'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { FilmType } from '../types/FilmType';
import { PersonType } from '../types/PersonType';
import { ReviewType } from '../types/ReviewType';


const instance = axios.create({
	baseURL: 'https://api.kinopoisk.dev/',
	headers: {
		'Content-Type': 'application/json'
	}
})

type MoviesByIdTypeProps = {
	query?: string
	limit?: number
}
type ReviewByIdTypeProps = {
	id?: string
	limit?: number
}
export const movieApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.kinopoisk.dev'}),
	endpoints: builder => ({
		getMovieById: builder.query<FilmType, string | undefined>({
			query: id => {
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
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
		getNewFilms: builder.query({
			query: ({limit}) => {
				return `/movie?field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getNewSerials: builder.query({
			query: ({limit}) => {
				return `/movie?field=rating.kp&search=7-10&field=year&search=2022&field=typeNumber&search=2&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=${import.meta.env.VITE_TOKEN}`
			}
		})
	})
})

export const {
	useGetMovieByIdQuery,
	useGetPersonByIdQuery,
	useGetMoviesByIdQuery,
	useGetReviewByIdQuery,
	useGetNewFilmsQuery,
	useGetNewSerialsQuery
} = movieApi

