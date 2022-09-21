import { HomePage } from "./home"
import React from "react"
import { MoviePage } from "./infoPage/InfoPage"

const LoginPageLazy = React.lazy(() => import('./login/Login'))
const RegisterPageLazy = React.lazy(() => import('./registration/Register'))
// const MoviePageLazy = React.lazy(() => import('./infoPage/InfoPage'))
const PersonPageLazy = React.lazy(() => import('./Person/InfoPerson'))
export const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/login',
		component: LoginPageLazy
	},
	{
		path: '/register',
		component: RegisterPageLazy
	},
	{
		path: '/film/:id',
		component: MoviePage
	},
	{
		path: '/name/:id',
		component: PersonPageLazy
	}
]