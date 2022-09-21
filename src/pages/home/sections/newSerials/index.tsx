import { showMoreSerial } from "../../../../reduxStore/ShowMore/showMore.slice"
import { useGetNewSerialsQuery } from "../../../../shared/api/apiConfig"
import { useAppDispatch, useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { LoadMoreButton } from "../../../../shared/ui/LoadMoreBtn/LoadMore"
import { Cards } from "../../../../Entities/Cards"
import { Panel } from "../../ui/Panel/Panel"
import style from './styles.module.scss'
export const NewSerials = () => {
	const limit = useAppSelector(state => state.showMoreSlice.serialLimit)
	const dispatch = useAppDispatch()
	const {data} = useGetNewSerialsQuery({limit})
	function handleOnClick(){
		dispatch(showMoreSerial())
	}
	return (
		<div>
			<Panel title='сериалы'/>
			<div className={style.cards}>
			{data?.docs?.map((item:any) => <Cards item={item} key={item.id}/>)}
			
			</div>
			<LoadMoreButton handleOnClick={handleOnClick}/>
		</div>
	)
}