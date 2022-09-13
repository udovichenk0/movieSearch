import { LoginForm } from "../../compontens/Login/LoginForm"
import { RegistrationForm } from "../../compontens/register/RegisterForm" 
import { Layout } from "../../shared/Layout/Layout"
import { LoginContainerStyle } from "../login/LoginContainerStyled"

export const Register = () => {
	return (
		<Layout>
			<RegistrationForm/>
		</Layout>
	)
}