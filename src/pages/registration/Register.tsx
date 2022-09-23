import { LoginForm } from "../../components/Login/LoginForm"
import { RegistrationForm } from "../../features/Auth/register/ui/RegisterForm"
import { Layout } from "../../shared/ui/Layout/Layout"
import { LoginContainerStyle } from "../login/LoginContainerStyled"

 const Register = () => {
	return (
		<Layout>
			<RegistrationForm/>
		</Layout>
	)
}

export default Register