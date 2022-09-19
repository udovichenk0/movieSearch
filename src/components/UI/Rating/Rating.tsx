import classNames from "classnames"
import { arountNumber } from "../../../utils/arountNumber/aroundNumber"
import style from './rating.module.scss'

export const Rating = ({rating,ratingStyle}:{rating:number, ratingStyle: string}) => {
	const isMovieGood = rating >= 5? 'good' : 'bad'
	return (
		<div className={classNames(ratingStyle, style[isMovieGood])}>{arountNumber(rating)}</div>
	)
}