import { Auth } from "@/features/auth"
import { Layout } from "@/shared/ui/Layout"
const Login = () => {
	console.log(Auth)
	return (
		<Layout>
			<Auth.LoginForm/>
		</Layout>
	)
}

export default Login