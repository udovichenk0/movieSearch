import { HomePage } from "./home"
import React from "react"
const MoviePageLazy = React.lazy(() => import('./film/index'))
const PersonPageLazy = React.lazy(() => import('./Person/ui'))
const MoviesPageLazy = React.lazy(() => import ('./movies/ui'))
export const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/film/:id',
		component: MoviePageLazy
	},
	{
		path: '/name/:id',
		component: PersonPageLazy
	},
	{
		path: '/movies',
		component: MoviesPageLazy
	}
]