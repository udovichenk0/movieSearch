import { useForm } from "react-hook-form"
import commonStyle from '../../common/Styles/FormStyles.module.scss'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { LoginContainerStyle } from "../../pages/login/LoginContainerStyled"
import style from './login.module.scss'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../utils/typedHooks/useAppHooks"
import { loginUser } from "../../reduxStore/Auth/auth.slice"
type formType = { 
	email: string
	password: string
}
export const LoginForm = ({children}:{children: React.ReactNode}) => {
const navigate = useNavigate()
const {handleSubmit, register, formState: {errors}} = useForm()
const dispatch = useAppDispatch()
const auth = getAuth();
const fields = ['email', 'password']
function onSubmit(data:any){
	signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
	const {email, uid, emailVerified} = user
	if(user) navigate(-1)
	dispatch(loginUser({email, uid, emailVerified}))
  })
}
return (
	<LoginContainerStyle>
		<div className={style.test}>
		<h1 className={commonStyle.login__title}>Login</h1>
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			{children}
			<div className={commonStyle.login__box}>
				{fields.map(item => {
					return (
				<div className={style.email__form}>
					<label className={style.label__form} htmlFor={item}>{item}</label>
					<input className={style.input} placeholder={`Enter ${item}`} type="text"{...register(`${item}`, {required:true })} />
					{/* @ts-ignore */}
					<div className={style.form__error}>{errors[item] && `${ errors[item].type}`}</div>
				</div>
				)
				})}
				<button className={commonStyle.login__button} onSubmit={handleSubmit(onSubmit)}>Login</button>
				<div>Doesn't have an account? <Link to='/register'>Register</Link></div>
			</div>
		</form>
	</div>
	</LoginContainerStyle>
	
)
}