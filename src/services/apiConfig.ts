import axios from 'axios'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


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
		getMovieById: builder.query<any, string | string[] | undefined>({
			query: id => {
				console.log(id)
				return `/movie?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
			}
		}),
		getPersonById: builder.query({
			query: id => `/person?search=${id}&field=id&token=${import.meta.env.VITE_TOKEN}`
		}),
		getMoviesById: builder.query<any,any>({
			query: ({query, limit}:any) => {
				return `/movie?${query}&limit=${limit}&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
			}
		})
	})
})

export const {
	useGetMovieByIdQuery,
	useGetPersonByIdQuery,
	useGetMoviesByIdQuery,
} = movieApi
