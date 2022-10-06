import { Auth } from "@/Entities/auth"
import { Layout } from "@/shared/ui/Layout"
import style from './styles.module.scss'
const Login = () => {
	console.log(Auth)
	return (
		<Layout>
			<Auth.LoginForm/>
		</Layout>
	)
}

export default Login