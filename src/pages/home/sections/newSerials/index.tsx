import style from './styles.module.scss'
import { Cards,homeModel } from "../../../../Entities/home"
import { LoadMoreButton,loadMoreModel } from "../../../../features/loadMore"
import { Panel } from "../../ui/Panel/Panel"
export const NewSerials = () => {
	const {data} = homeModel.useGetNewSerialsQuery(homeModel.getSerialLimit())
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