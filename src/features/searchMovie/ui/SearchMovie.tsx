import { useForm } from "react-hook-form"
import { searchIcon } from "../../../shared/assets"
import style from './search.module.scss'
interface formInterface{
	search: string
}
export const Search = () => {
	const {register, handleSubmit} = useForm<formInterface>()
	const onSubmit = (data: any) => {
		console.log(data)
	}
	return (
		<form className={style.form__wrapper} onSubmit={handleSubmit(onSubmit)}>

			<input className={style.search__input} placeholder="Search" type="text" {...register('search')} />

			<button className={style.form__button}onSubmit={handleSubmit(onSubmit)}>
				<div className={style.searchImage__container}>
					<img className={style.search} src={searchIcon} alt="" />
				</div>
			</button>
		</form>
	)
}