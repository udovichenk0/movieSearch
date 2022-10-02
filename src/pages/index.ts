import { HomePage } from "./home/ui"
import React from "react"
const MoviePageLazy = React.lazy(() => import('./film/index'))
const PersonPageLazy = React.lazy(() => import('./Person/ui'))
const MoviesPageLazy = React.lazy(() => import ('./movies/ui'))
const SerialsPageLazy = React.lazy(() => import ('./serials/ui'))
const CartoonsPageLazy = React.lazy(() => import ('./cartoons/ui'))
const FavoritesPageLazy = React.lazy(() => import('./favorites/ui'))
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
	},
	{
		path: '/serials',
		component: SerialsPageLazy
	},
	{
		path: '/cartoons',
		component: CartoonsPageLazy
	},
	{
		path: '/favorites',
		component: FavoritesPageLazy
	}
]