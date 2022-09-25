import classnames from "classnames"
import { useState } from "react"
import { dateConverter, reviewColor } from "../../../../../../shared/lib"
import style from './styles.module.scss'
type ReviewItem = {
	item: any
	ind: number
}
export const ReviewCard = ({item, ind}:ReviewItem) => {
	const [isClosed, toggleClose] = useState<any>({})
	function handleChange(ind: number, value:boolean){
		toggleClose((prevState:any) => ({
			...prevState,
			[ind]: value
		}))
	}
	return (
		<div key={ind} className={classnames(style.main__reviews, style[reviewColor(item.type)])}>
		<div className={style.main__review}>
			<div className={style.main__top}>
					<h1 className={style.main__name}>{item?.title}</h1>
					<div className={style.main__comments}>
						<p className={classnames(style.main__comment, !isClosed[ind]? style.toggle : '')}>
						{ !isClosed[ind]? item?.review?.substring(0,550) : item?.review}
						</p>
					</div>
						<button onClick={() => handleChange(ind, !isClosed[ind])}
						className={style.main__button}>{!isClosed[ind] ? 'показать всю рецензию' : 'скрыть рецензию'}
						</button>
			</div>
				<div className={style.main__bottom}>
					<div className={style.main__container}>
						<div className={style.main__data}>{dateConverter(item?.date)}</div>
						<div className={style.main__estimates}>
							<button className={style.main__like}>Likes {item.reviewLikes}</button>
							<button className={style.main__dislike}>Dislikes {item.reviewDislikes}</button>
						</div>
					</div>
				</div>
			</div>
			</div>
	)
}