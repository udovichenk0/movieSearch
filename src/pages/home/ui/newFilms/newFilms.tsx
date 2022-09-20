import { showMoreFilms } from "../../../../reduxStore/ShowMore/showMore.slice"
import { useGetNewFilmsQuery } from "../../../../shared/api/apiConfig"
import { useAppDispatch, useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { LoadMoreButton } from "../../../../shared/ui/LoadMoreBtn/LoadMore"
import { Cards } from "../../../../Entities/MovieCards/Cards"
import { Panel } from "../Panel/Panel"
import style from './newFilms.module.scss'

export const NewFilms = () => {
	const limit = useAppSelector(state => state.showMoreSlice.filmLimit)
	const {data} = useGetNewFilmsQuery({limit})
	const dispatch = useAppDispatch()
	function handleOnClick(){
		dispatch(showMoreFilms())
	}
	return (
		<div className={style.filmsWrap}>
			<Panel title='фильмы'/>
			<Cards data={data}/>
			<LoadMoreButton handleOnClick={handleOnClick}/>
		</div>
	)
}