import axios from 'axios'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { FilmType } from '../types/FilmType';


const instance = axios.create({
	baseURL: 'https://api.kinopoisk.dev/',
	headers: {
		'Content-Type': 'application/json'
	}
})

export const movieApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.kinopoisk.dev'}),
	endpoints: builder => ({
		getMovieById: builder.query<FilmType, string | undefined>({
			query: id => {
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getPersonById: builder.query({
			query: id => `/person?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
		}),
		getMoviesById: builder.query<any,any>({
			query: ({query, limit}:any) => {
				return `/movie?${query}&limit=${limit}&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getReviewById: builder.query<any,any>({
			query: ({id, limit}:any) => {
				return `/review?search=${id}&field=movieId&limit=${limit}&page=1&token=${import.meta.env.VITE_TOKEN}`
			}
		})
	})
})

export const {
	useGetMovieByIdQuery,
	useGetPersonByIdQuery,
	useGetMoviesByIdQuery,
	useGetReviewByIdQuery,
} = movieApi
