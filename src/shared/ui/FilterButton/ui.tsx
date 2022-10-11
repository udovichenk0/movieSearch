import style from './styles.module.scss'
export const FilterButton = ({onClick}: any) => {
	return (
		<button className={style.filter} onClick={onClick}>Фильтры</button>
	)
}