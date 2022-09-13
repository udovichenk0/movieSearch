import { InfoPage } from "./infoPage/InfoPage"
import { HomePage } from "./home/Home"
import { Login } from "./login/Login"
import { Register } from "./registration/Register"
import { InfoPerson } from "./Person/InfoPerson"
export const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/film/:id',
		component: InfoPage
	},
	{
		path: '/person/:id',
		component: InfoPerson
	}
]