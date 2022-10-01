import { filterModel } from '../../../../../Entities/filter'
import { useAppDispatch } from '../../../../../shared/lib'
import { useFilterChange } from '../model'
import style from './styles.module.scss'
export const ButtonSubmit = ({handleSubmit}:any) => {
	const dispatch = useAppDispatch()
	const onFilterChange = (data: any) => {
		// @ts-ignore
		dispatch(filterModel.changeFilters(data))
		
	}
return (
	<button className={style.submit} onClick={handleSubmit(onFilterChange)}>submit</button>
)
}