import classnames from "classnames"
import style from './styles.module.scss'
import { useGetReviewByIdQuery } from "../../../../shared/api"
import { filmModel, Review } from "../../../../Entities/film"
import { LoadMoreButton, loadMoreModel } from "../../../../features/loadMore"

export const Comments = ({id}:{id?: string}) => {
	const limit = filmModel.getReviewLimit()
	const {data} = useGetReviewByIdQuery({id, limit})	
	if(!data?.docs?.length)return <></>
	const {total}:{total:number} = {...data}
	return (
		<div>
			<div className={style.title}>Рецензии кинокритиков</div>
			<div className={classnames(style.review__block)}>
				<div className={style.main__block}>
			{data?.docs?.map((item:any, ind: number) => <Review.ReviewCard key={ind} ind={ind} item={item} />)}
			<div className={style.showMore}>
			<LoadMoreButton action={loadMoreModel.showMoreReview}/>
			</div>
				</div>
			<Review.StatisticItem total={total} id={id}/>
			</div>
		</div>
	)
}