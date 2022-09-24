import classnames from "classnames"
import { useState } from "react"
import { useGetReviewByIdQuery } from "../../../../shared/api/apiConfig"
import style from './review.module.scss'
import { ReviewItem, StatisticItem } from "./ui"
export interface IReview {
	title: string
	type: string
	review: string
	date: string
	reviewLikes: number
	reviewDislikes: number
}
	export const Review = ({id}:{id?: string}) => {
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
			{/* <LoadMoreButton handleOnClick={handleOnClick}/> */}
			</div>
				</div>
				<StatisticItem total={total} id={id}/>
			</div>
		</div>
	)
}
// take review to the film page