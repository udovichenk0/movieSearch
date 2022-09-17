import classNames from "classnames"
import { arountNumber } from "../../../utils/arountNumber/aroundNumber"
import style from './rating.module.scss'

type RatingType = {
	rating: number | undefined
	ratingStyle: string
}

export const Rating = ({rating,ratingStyle}:RatingType) => {
	if(!rating) return <></>
	const isMovieGood = rating >= 5? 'good' : 'bad'
	return (
		<div className={classNames(ratingStyle, style[isMovieGood])}>{arountNumber(rating)}</div>
	)
}