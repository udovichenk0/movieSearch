import { useForm } from "react-hook-form"
import { Input } from "../../shared/loginInput/inputForm"
import style from './register.module.scss'
import commonStyle from '../../common/Styles/FormStyles.module.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { LoginContainerStyle } from "../../pages/login/LoginContainerStyled"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

type FormType = {
	name: string
	email: string
	secondname: string
	password: string
}
const fields = ['email', 'password']
const namesField = ['name', 'surname']
export const RegistrationForm = () => {
	const navigate = useNavigate()
	const {register, handleSubmit, formState: {errors}} = useForm()
	const auth = getAuth();
	function onSubmit(data:any){
		createUserWithEmailAndPassword(auth, data.email, data.password)
		.then(data => {
			const user = data.user
			if(user) navigate('/login')
		})
	}
	return (
		<LoginContainerStyle>
			<div className={style.login__form}>
		<h1 className={commonStyle.login__title}>Sigh Up</h1>
		<form action="" onSubmit={handleSubmit(onSubmit)}>
		<div className={style.register__body}>
		{namesField.map(item => {
			return (
				<div className={style.email__form}>
					<label className={style.label__form} htmlFor={item}>{item}</label>
					<input className={style.login} placeholder={`Enter ${item}`} type="text"{...register(`${item}`, {required:true })} />
					{/* @ts-ignore */}
					<div className={style.form__error}>{errors[item] && `${errors[item].type}`}</div>
				</div>
			)
		})}
		</div>
			<div className={commonStyle.login__box}>
			{fields.map(item => {
			return (
				<div className={style.email__form}>
					<label className={style.label__form} htmlFor={item}>{item}</label>
					<input className={style.login} placeholder={`Enter ${item}`} type="text"{...register(`${item}`, {required:true })} />
					<div className={style.form__error}>{errors[item] && `${errors[item]?.type}`}</div>
				</div>
			)
		})}
					<button className={commonStyle.login__button} onSubmit={handleSubmit(onSubmit)}>Register</button>
					<div>Have an account? <NavLink to='/login'>Login</NavLink></div>
			</div>
		</form>
	</div>
		</LoginContainerStyle>
		
	)
}