import { useForm } from "react-hook-form"
import { Input } from "../../shared/loginInput/inputForm"
import commonStyle from '../../common/Styles/FormStyles.module.scss'
import { NavLink } from "react-router-dom"
import { LoginContainerStyle } from "../../pages/login/LoginContainerStyled"


type formType = { 
	email: string
	password: string
}
export const LoginForm = ({children}:{children: React.ReactNode}) => {
const {handleSubmit} = useForm<formType>()
function onSubmit(data:any){
	console.log(data)
}
return (
	<LoginContainerStyle>
		<div>
		<h1 className={commonStyle.login__title}>Login</h1>
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			{children}
			<div className={commonStyle.login__box}>
				<Input label={'email'}/>
				<Input label={'password'}/>
				<button className={commonStyle.login__button} onSubmit={handleSubmit(onSubmit)}>Login</button>
				<div>Doesn't have an account? <NavLink to='/register'>Register</NavLink></div>
			</div>
		</form>
	</div>
	</LoginContainerStyle>
	
)
}