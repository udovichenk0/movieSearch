import classnames from 'classnames'
import { useState } from 'react'
import { useGetReviewByIdQuery } from '../../../services/apiConfig'
import { dateConverter } from '../../../utils/stringToDate/dateConverter'
import { useAppSelector } from '../../../utils/typedHooks/useAppHooks'
import { ShowMore } from '../ShowMoreButton/ShowMore'
import { EstimatesInfo } from './components/Estimate/EstimateInfo'
import { ReviewItem } from './components/ReviewItem/ReviewItem'
import style from './review.module.scss' 
interface IReview {
	title: string
	review: string
	date: string
	type: string
}
	export const Review = ({id}:{id: string | undefined}) => {
	const [limit, setLimit] = useState<number>(3)
	const {data} = useGetReviewByIdQuery({id, limit})	
	if(!data?.docs?.length)return <></>
	const {total}:{total:number} = {...data}
	return (
		<div>
			<div className={style.title}>Рецензии кинокритиков</div>
			<div className={classnames(style.main_block, 'main')}>
				<div className={style.main__block}>
					{data?.docs?.map((item:IReview, ind: number) => <ReviewItem key={ind} ind={ind} item={item} />)}
			<div className={style.showMore}>
			<ShowMore limit={limit} setLimit={setLimit}/>
			</div>
				</div>
				<EstimatesInfo total={total} id={id}/>
			</div>
		</div>
	)
}