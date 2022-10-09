import { searchModel } from '@/Entities/searchDropDown'
import { useAppDispatch } from '@/shared/lib'
import classNames from 'classnames'
import style from './styles.module.scss'
const tabs = [
	{label: 'Фильмы', typeNumber: 1},
	{label: 'Сериалы', typeNumber: 2},
	{label: 'Мультики', typeNumber: 3}
]
export const Switches = () => {
	const tab = searchModel.getTab()
	const dispatch = useAppDispatch()
	function onClick(e:any,typeNumber:number){
		e.preventDefault()
		dispatch(searchModel.setTab(typeNumber))
	}
	return (
		<div className={style.tab_container}>
				<div className={style.tabs}>
					{tabs.map(({label,typeNumber}:any) => {
						return (
							<button key={label} className={classNames(style.tab, tab == typeNumber && style.active)}
							onClick={(e)=> onClick(e, typeNumber)}
							>{label}</button>
						)
					})}
				</div>
			</div>
	)
}