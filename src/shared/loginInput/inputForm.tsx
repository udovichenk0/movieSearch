import { useForm } from "react-hook-form"
import style from './input.module.scss'
export const Input = ({label}: {label: string}) => {
	const {handleSubmit, register, formState: {errors}} = useForm()

	return (
		<div className={style.email__form}>
			<label className={style.label__form} htmlFor="email">{label}</label>
			<input className={style.login} placeholder={`Enter ${label}`} type="text"{...register(`${label}`, {required:true })} />
			<div className={style.form__error}>{errors?.label && `${errors.label.type}`}</div>
		</div>
	)
}