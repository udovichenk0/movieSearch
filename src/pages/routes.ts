import { HomePage } from "./home/Home"
import React from "react"

const LoginPageLazy = React.lazy(() => import('./login/Login'))
const RegisterPageLazy = React.lazy(() => import('./registration/Register'))
const MoviePageLazy = React.lazy(() => import('./infoPage/InfoPage'))
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
		component: MoviePageLazy
	},
	{
		path: '/name/:id',
		component: PersonPageLazy
	}
]