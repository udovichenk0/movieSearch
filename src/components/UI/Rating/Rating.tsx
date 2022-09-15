import classNames from "classnames"
import style from './rating.module.scss'

export const Rating = ({rating,ratingStyle}:any) => {
	const isMovieGood = rating?.kp >= 5? 'good' : 'bad'
	return (
		<div className={classNames(ratingStyle, style[isMovieGood])}>{rating?.kp}</div>
	)
}