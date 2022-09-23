import style from './styles.module.scss'
import { useAppSelector } from "../../../../utils/typedHooks/useAppHooks"
import { Cards,movieModel } from "../../../../Entities/home"
import { LoadMoreButton,loadMoreModel } from "../../../../features/loadMore"
import { Panel } from "../../ui/Panel/Panel"
export const NewSerials = () => {
	const limit = useAppSelector(state => state.showMoreSlice.serialLimit)
	const {data} = movieModel.useGetNewSerialsQuery({limit})
	return (
		<div>
			<Panel title='сериалы'/>
			<div className={style.cards}>
				{data?.docs?.map((item:any) => <Cards item={item} key={item.id}/>)}
			</div>
			<LoadMoreButton action={loadMoreModel.showMoreSerial}/>
		</div>
	)
}