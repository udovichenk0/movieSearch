import { filterModel } from '../../../../../Entities/filter'
import { useAppDispatch } from '../../../../../shared/lib'
import { getFullYear } from '../../../../../shared/lib/getFullYear'
import style from './styles.module.scss'
export const ResetButton = ({handleSubmit}:any) => {
	const dispatch = useAppDispatch()
	const onFilterChange = () => {
		// @ts-ignore
		dispatch(filterModel.changeFilters({rating: [1,10], year: [1960, getFullYear()], genre: ``}))
	}
return (
	<button className={style.submit} onClick={handleSubmit(onFilterChange)}>Сбросить</button>
)
}
