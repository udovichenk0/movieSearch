import { searchIcon } from "@/shared/assets/buttonSearch"
import style from './search.module.scss'
export const Search = () => {
	const onSubmit = () => {
		console.log(1)
	}
	return (
		<form className={style.form__wrapper}>
			<input className={style.search__input} placeholder="Search" type="text" />
			<button className={style.form__button}onSubmit={onSubmit}>
				<div className={style.searchImage__container}>
					<img className={style.search} src={searchIcon} alt="" />
				</div>
			</button>
		</form>
	)
}