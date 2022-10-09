import { useGetReviewByIdQuery } from "@/shared/api/apiConfig"
import { getPercent } from "@/shared/lib"
import { MovieType } from "@/types/MovieType"
import style from './styles.module.scss'
export const StatisticItem = ({total, id}: {total: number, id: string | undefined}) => {

	const {data} = useGetReviewByIdQuery({id, limit: total})
	const goodReview = data?.docs?.filter((item:MovieType) => !item.type || item.type === 'Позитивный').length
	const badReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Негативный').length
	const neutralReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Нейтральный').length
	const items = [
		{styleReview: 'votes__allNumbers', value: total, subText: 'Всего'},
		{styleReview: 'votes__likedNumber', value: goodReview, subText: 'Положительные'},
		{styleReview: 'votes__dislidedNumber', value: badReview, subText: 'Отрицательные'},
		{styleReview: 'votes__neutralNumber', value: neutralReview, subText: 'Нейтральные'},
	]
	// useVotes(data, total)
	return (
		<div className={style.statistics}>
			<div className={style.stickyBlock}>
				{items.map(({styleReview, value,subText}) => {
				return (
					<div key={styleReview} className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style[styleReview]}>{value}</div>
							<div className={style.votes__precent}>{getPercent({total,value})}</div>
						</div>
						<p className={style.undertext}>{subText}</p>
					</div>
				)
			})}
			</div>
			
		</div>
	)
}