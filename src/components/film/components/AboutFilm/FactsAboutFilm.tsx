import style from './Facts.module.scss'

export const InfoTable = ({items}:any ) => {
	return items.map(({leftItem, rightItem}:any) => {
		return (
			<div className={style.info} key={leftItem}>
				<div  className={style.info__leftSide}>{leftItem}</div>
				<div className={style.info__rightSide}>{rightItem}</div>
			</div>
		)
	})
}