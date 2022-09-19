import { useGetNewSerialsQuery } from "../../../../services/apiConfig"
import { useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { Cards } from "../Cards/Cards"
import { LoadMoreButton } from "../loadMoreBtn/LoadMoreBtn"
import { Panel } from "../Panel/Panel"

export const NewSerials = () => {
	const limit = useAppSelector(state => state.showMoreSlice.serialLimit)
	const {data} = useGetNewSerialsQuery({limit})
	return (
		<div>
			<Panel title='сериалы'/>
			<Cards data={data}/>
			<LoadMoreButton/>
		</div>
	)
}