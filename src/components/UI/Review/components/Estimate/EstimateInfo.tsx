import { useGetReviewByIdQuery } from '../../../../../services/apiConfig'
import { MovieType } from '../../../../../types/MovieType'
import { getPercent } from '../../../../../utils/getPercent/getPercent'
import style from './estimate.module.scss'

export const EstimatesInfo = ({total, id}: {total: number, id: string | undefined}) => {

	const {data} = useGetReviewByIdQuery({id, limit: total})
	const goodReview = data?.docs?.filter((item:MovieType) => !item.type || item.type === 'Позитивный').length
	const badReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Негативный').length
	const neutralReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Нейтральный').length
	return (
		<div className={style.statistics}>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__allNumbers}>{total}</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__likedNumber}>{goodReview}</div>
							<div className={style.votes__precent}>{getPercent({total, value: goodReview})}</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__dislidedNumber}>{badReview}</div>
							<div className={style.votes__precent}>{getPercent({total, value: badReview})}</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__neutralNumber}>{neutralReview}</div>
							<div className={style.votes__precent}>{getPercent({total, value: neutralReview})}</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
				</div>
	)
}