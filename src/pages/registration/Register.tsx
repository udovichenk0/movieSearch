import { LoginForm } from "../../components/Login/LoginForm"
import { RegistrationForm } from "../../components/register/RegisterForm" 
import { Layout } from "../../shared/Layout/Layout"
import { LoginContainerStyle } from "../login/LoginContainerStyled"

export const Register = () => {
	return (
		<Layout>
			<RegistrationForm/>
		</Layout>
	)
}