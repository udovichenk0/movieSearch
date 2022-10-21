import { Form, SubmitButton, TextInput } from "@/shared/auth";
import { useLocalStorage } from "@/shared/lib/browser/useLocalStorage";
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginModel } from ".";
import style from './styles.module.scss'
export const LoginForm = () => {
	const dispatch = useDispatch()
	const [auth, setAuth] = useLocalStorage("auth", '');
	const navigate = useNavigate()
	const { handleSubmit, control } = useForm({
		defaultValues:{
			email: '',
			password: ''
		}
	})
	const onSubmit = (data:{email:string, password: string}) => {
		const {email, password} = data
		loginModel.login.signIn({email, password, dispatch, setAuth})
		navigate(-1)
	};
	return (
				<Form handleAuth={handleSubmit(onSubmit)}>
					<h1 className={style.title}>Вход</h1>
					<Controller
							render={({ field:{onChange, name, ref, value} }) => 
							<TextInput
							label={'Email'}
							placeholder={'Enter email'}
							onChange={onChange}
							name={name}
							inputRef={ref}
							minLength={8}
							value={value}
							/>}
							name="email"
							control={control}
						/>
						<Controller
							render={({ field:{onChange, name, ref, value}}) => 
							<TextInput
							label={'Password'}
							placeholder={'Enter password'}
							onChange={onChange}
							name={name}
							inputRef={ref}
							minLength={8}
							value={value}
							/>}
							name="password"
							control={control}
						/>
						<SubmitButton handleAuth={handleSubmit(onSubmit)} title={'Войти'} />
						<div className={style.box}>
							<p>Нет аккаунта?</p>
							<div className={style.link}>
							<Link to={'/register'} >регистрация</Link>
							</div>
						</div>
				</Form>
	)
}