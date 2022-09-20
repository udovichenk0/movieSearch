import { showMoreSerial } from "../../../../reduxStore/ShowMore/showMore.slice"
import { useGetNewSerialsQuery } from "../../../../shared/api/apiConfig"
import { useAppDispatch, useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { LoadMoreButton } from "../../../../shared/ui/LoadMoreBtn/LoadMore"
import { Cards } from "../../../../Entities/MovieCards/Cards"
import { Panel } from "../Panel/Panel"

export const NewSerials = () => {
	const limit = useAppSelector(state => state.showMoreSlice.serialLimit)
	const dispatch = useAppDispatch()
	function handleOnClick(){
		dispatch(showMoreSerial())
	}
	const {data} = useGetNewSerialsQuery({limit})
	return (
		<div>
			<Panel title='сериалы'/>
			<Cards data={data}/>
			<LoadMoreButton handleOnClick={handleOnClick}/>
		</div>
	)
}