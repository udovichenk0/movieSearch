import { showMoreSerial } from "../../../../reduxStore/ShowMore/showMore.slice"
import { useGetNewSerialsQuery } from "../../../../services/apiConfig"
import { useAppDispatch, useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { LoadMoreButton } from "../../../UI/LoadMoreBtn/LoadMore"
import { Cards } from "../Cards/Cards"
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