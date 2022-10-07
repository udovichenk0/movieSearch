import { Form, SubmitButton, TextInput } from "@/shared/auth";
import { useAppDispatch } from "@/shared/lib";
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { registerModel } from ".";
import style from './styles.module.scss'
export const RegisterForm = () => {
	const dispatch = useAppDispatch()
	const {handleSubmit, formState: { errors }, control } = useForm({
		defaultValues:{
			email: '',
			password: '',
			name: '',
			secondName: ''
		}
	})
	const onSubmit = (data:any) => {
		const {email, password} = data
		registerModel.register.signIn({email, password, dispatch})
	};
	// const 
	return (
				<Form handleAuth={handleSubmit(onSubmit)}>
					<h1 className={style.title}>Регистрация</h1>
					<div className={style.wrapper}>
						<div>
					<Controller
							render={({ field:{onChange, name, ref, value} }) => 
							<TextInput
							label={'Имя'}
							placeholder={'Имя'}
							onChange={onChange}
							name={name}
							inputRef={ref}
							minLength={8}
							value={value}
							/>}
							name="name"
							control={control}
						/>
					</div>
					<div>
						<Controller
							render={({ field:{onChange, name, ref, value} }) => 
							<TextInput
							label={'Фамилия'}
							placeholder={'Фамилия'}
							onChange={onChange}
							name={name}
							inputRef={ref}
							minLength={8}
							value={value}
							/>}
							name="secondName"
							control={control}
						/>
					</div>
						</div>
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
						<SubmitButton handleAuth={handleSubmit(onSubmit)} title={'Зарегистрироваться'} />
						<div className={style.box}>
							<p>Есть аккаунт?</p>
							<div className={style.link}>
							<Link to={'/login'} >Войти в аккаунт</Link>
							</div>
						</div>
				</Form>
	)
}