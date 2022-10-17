import { SearchDropDown } from "@/Entities/searchDropDown"
import { searchIcon } from "@/shared/assets/buttonSearch"
import { SearchModal } from "@/shared/ui/searchModal"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import style from './search.module.scss'
import { Switches } from "./searchSwitches"
export const Search = () => {
	const {register,watch} = useForm({defaultValues: {title: '' }})
	const [isClicked, setClick] = useState(false)
	const title = watch('title')
	const ref = useRef<any>(null)

	useEffect(() => {
		const closeDropDown = (e:Event) => {
			if (isClicked && ref.current && !ref.current.contains(e.target)) {
				setClick(false)
			}
		}
		document.addEventListener('click', closeDropDown)
			return () => document.removeEventListener('click', closeDropDown)
	},[isClicked, setClick])

	return (
			<form ref={ref} className={style.form__wrapper}>
				<input onClick={() => setClick(prev => true)} className={style.search__input} {...register('title')} placeholder="Search" type="text" />
				<Link to={`/search/${title}`} className={style.form__button}>
					<div className={style.searchImage__container}>
						<img className={style.search} src={searchIcon} alt='search' />
					</div>
				</Link>
				{title && isClicked && 
				<SearchModal>
					<Switches/>
					<SearchDropDown title={title}/>
					<Link to={`/search/${title}`} className={style.link}>Показать все</Link>
				</SearchModal>}
			</form>
	)
}