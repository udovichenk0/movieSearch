import { LoginContainerStyle } from "./LoginContainerStyled"
import { LoginForm } from "../../components/Login/LoginForm"
import { Layout } from "../../shared/Layout/Layout"
export const Login = () => {
	return (
		<Layout>
			<LoginForm children={undefined}/>
		</Layout>
	)
}