import { Panel } from "../../ui/Panel/Panel"
import style from './newFilms.module.scss'
import { Cards, homeModel } from "../../../../Entities/home"
import { loadMoreModel, LoadMoreButton } from "../../../../features/loadMore"

export const NewFilms = () => {
	const {data} = homeModel.useGetNewMoviesQuery(homeModel.getMovieLimit())
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