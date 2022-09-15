import { useForm } from "react-hook-form"
import { Input } from "../../shared/loginInput/inputForm"
import style from './register.module.scss'
import commonStyle from '../../common/Styles/FormStyles.module.scss'
import { NavLink } from "react-router-dom"
import { LoginContainerStyle } from "../../pages/login/LoginContainerStyled"
export const RegistrationForm = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<any>()
	function onSubmit(data:any){
		console.log(data)
	}
	return (
		<LoginContainerStyle>
			<div className={style.login__form}>
		<h1 className={commonStyle.login__title}>Sigh Up</h1>
		<form action="" onSubmit={handleSubmit(onSubmit)}>
		<div className={style.register__body}>
			<Input label={'name'}/>
			<Input label={'secondname'}/>
		</div>
			<div className={commonStyle.login__box}>
				<Input label={'email'}/>
				<Input label={'password'}/>
				<button className={commonStyle.login__button} onSubmit={handleSubmit(onSubmit)}>Register</button>
				<div>Have an account? <NavLink to='/login'>Login</NavLink></div>
			</div>
		</form>
		
	</div>
		</LoginContainerStyle>
		
	)
}