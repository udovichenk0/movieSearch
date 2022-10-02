import { Panel } from "../../ui/Panel/Panel"
import style from './newFilms.module.scss'
import { Cards } from "../../../../Entities/home"
import { loadMoreModel, LoadMoreButton } from "../../../../features/loadMore"
import { cardType } from "../../../../types/someTypes/someTypes"
export const NewFilms = ({data}: {data?: cardType}) => {
	return (
			<div className={style.filmsWrap}>
			<Panel title='фильмы' link={'movies'}/>
			<div className={style.cards}>
			{data?.docs?.map((item:any) => <Cards item={item} key={item.id}/>)}
			</div>
			<LoadMoreButton action={loadMoreModel.showMoreFilms}/>
		</div>
	)
}