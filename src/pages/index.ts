import { HomePage } from "./home/ui"
import React from "react"
const MoviePageLazy = React.lazy(() => import('./film/index'))
const PersonPageLazy = React.lazy(() => import('./Person'))
const MoviesPageLazy = React.lazy(() => import ('./movies/ui'))
const SerialsPageLazy = React.lazy(() => import ('./serials/ui'))
const CartoonsPageLazy = React.lazy(() => import ('./cartoons/ui'))
const FavoritesPageLazy = React.lazy(() => import('./favorites/ui'))
const RoomPlayerPageLazy = React.lazy(() => import('./room'))
const LoginPageLazy = React.lazy(() => import('./login'))
const RegisterPageLazy = React.lazy(() => import('./register'))
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
	},
	{
		path: '/room/:id',
		component: RoomPlayerPageLazy
	},
	{
		path: '/login',
		component: LoginPageLazy
	},
	{
		path: '/register',
		component: RegisterPageLazy
	}
]