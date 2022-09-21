import { showMoreFilms } from "../../../../reduxStore/ShowMore/showMore.slice"
import { useGetNewFilmsQuery } from "../../../../shared/api/apiConfig"
import { useAppDispatch, useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { LoadMoreButton } from "../../../../shared/ui/LoadMoreBtn/LoadMore"
import { Cards } from "../../../../Entities/Cards"
import { Panel } from "../../ui/Panel/Panel"
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
			<div className={style.cards}>
			{data?.docs?.map((item:any) => <Cards item={item} key={item.id}/>)}
			
			</div>
			<LoadMoreButton handleOnClick={handleOnClick}/>
		</div>
	)
}

// <div className={style.cards}>
// 			{data?.docs?.map((item:movieTypes) => {
// 				return <div key={item.id} className={style.card}>
// 				<Link to={`/film/${item.id}`} className={style.card__image}>
// 					<div className={style.card__image}>
// 						<img className={style.image} src={item?.poster?.previewUrl} alt="" />
// 					</div>
// 				</Link>
// 				<div className={style.card__title}>{item?.name}</div>
// 				<p className={style.card__substring}>{item?.year}, {item?.type}</p>
// 			</div>
// 			})}			
// 		</div>