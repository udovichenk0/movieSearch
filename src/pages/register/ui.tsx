import { Auth } from "@/features/auth"
import { Layout } from "@/shared/ui/Layout"
const Register = () => {
	return (
		<Layout>
			<Auth.RegisterForm/>
		</Layout>
	)
}

export default Register