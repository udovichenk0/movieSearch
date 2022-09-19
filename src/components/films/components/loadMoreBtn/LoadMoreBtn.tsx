import { showMoreFilms } from '../../../../reduxStore/ShowMore/showMore.slice'
import { useAppDispatch, useAppSelector } from '../../../../utils/typedHooks/useAppHooks'
import style from './loadMore.module.scss'

export const LoadMoreButton = () => {
	const dispatch = useAppDispatch()
	function handleOnClick(){
		dispatch(showMoreFilms())
	}
	return(
		<div onClick={handleOnClick} className={style.button__wrapper}>
			<button className={style.loadMore}>
			Показать ещё
		</button>
		</div>
		
	)
}