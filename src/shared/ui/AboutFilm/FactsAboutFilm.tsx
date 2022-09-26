import style from './Facts.module.scss'

type PropTypes = {
	leftItem: string
	rightItem: string | string[] | number | undefined
}

export const InfoTable = ({items}:{items: PropTypes[]}) => {
	return <>
		{items.map(({leftItem, rightItem}:PropTypes) => {
		return (
			<div className={style.block} key={leftItem}>
				<div  className={style.block__leftSide}>{leftItem}</div>
				<div className={style.block__rightSide}>{rightItem}</div>
			</div>
		)
	})}	
	</>	
}