import classnames from "classnames"
import { useState } from "react"
import { reviewColor } from "../../../../../utils/reviewColor/reviewColor"
import { dateConverter } from "../../../../../utils/stringToDate/dateConverter"
import style from './ReviewItem.module.scss'
export const ReviewItem = ({item, ind}:any) => {
	const [isClosed, toggleClose] = useState<any>({})
	function handleChange(ind: number, value:boolean){
		toggleClose((prevState:any) => ({
			...prevState,
			[ind]: value
		}))
	}
	// console.log(item.type)
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
							<div className={style.main__like}>Like</div>
							<div className={style.main__dislike}>Dislike</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	)
}