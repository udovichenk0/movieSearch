import { ReactElement } from 'react'
import style from './Facts.module.scss'

type PropTypes = {
	leftItem: string
	rightItem: string | string[] | number | undefined
}

export const InfoTable = ({items}:{items: PropTypes[]}) => {
	return <>
		{items.map(({leftItem, rightItem}:PropTypes) => {
		return (
			<div className={style.info} key={leftItem}>
				<div  className={style.info__leftSide}>{leftItem}</div>
				<div className={style.info__rightSide}>{rightItem}</div>
			</div>
		)
	})}
	</>	
}