import { SearchDropDown, searchModel } from "@/Entities/searchDropDown"
import { searchIcon } from "@/shared/assets/buttonSearch"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import style from './search.module.scss'
export const Search = () => {

	const navigate = useNavigate()
	const {register,watch,getValues} = useForm({defaultValues: {title: '' }})
	const title = watch('title')
	console.log('rerender')
	return (
		<div>
			<form className={style.form__wrapper}>
				<input className={style.search__input} {...register('title')} placeholder="Search" type="text" />
				<button className={style.form__button}onSubmit={({title}:any) => navigate(`/search/${title}`)}>
					<div className={style.searchImage__container}>
						<img className={style.search} src={searchIcon} alt='search' />
					</div>
				</button>
				{title && <SearchDropDown title={title}/>}
			</form>
		</div>
		
	)
}