import style from './styles.module.scss'
import { Cards } from "../../../../Entities/home"
import { LoadMoreButton,loadMoreModel } from "../../../../features/loadMore"
import { Panel } from "../../ui/Panel/Panel"
import { cardType } from '../../../../types/someTypes/someTypes'
export const NewSerials = ({data}: {data?: cardType}) => {
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