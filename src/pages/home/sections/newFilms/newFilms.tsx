import { useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { Panel } from "../../ui/Panel/Panel"
import style from './newFilms.module.scss'
import { Cards, movieModel } from "../../../../Entities/home"
import { loadMoreModel, LoadMoreButton } from "../../../../features/loadMore"

export const NewFilms = () => {
	const limit = useAppSelector(state => state.showMoreSlice.filmLimit)
	const {data} = movieModel.useGetNewMoviesQuery({limit})
	return (
		<div className={style.filmsWrap}>
			<Panel title='фильмы'/>
			<div className={style.cards}>
			{data?.docs?.map((item:any) => <Cards item={item} key={item.id}/>)}
			
			</div>
			<LoadMoreButton action={loadMoreModel.showMoreFilms}/>
		</div>
	)
}