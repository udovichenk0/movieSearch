import { useGetNewFilmsQuery } from "../../../../services/apiConfig"
import { useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { Cards } from "../Cards/Cards"
import { LoadMoreButton } from "../loadMoreBtn/LoadMoreBtn"
import { Panel } from "../Panel/Panel"
import style from './newFilms.module.scss'

export const NewFilms = () => {
	const limit = useAppSelector(state => state.showMoreSlice.filmLimit)
	const {data} = useGetNewFilmsQuery({limit})
	return (
		<div className={style.filmsWrap}>
			<Panel title='фильмы'/>
			<Cards data={data}/>
			<LoadMoreButton/>
		</div>
	)
}