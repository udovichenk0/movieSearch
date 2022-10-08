import { useSearchMovieQuery } from '@/shared/api'
import { useAppDispatch } from '@/shared/lib'
import classNames from 'classnames'
import { searchModel } from '.'
import { setTab } from './model'
import style from './styles.module.scss'
const tabs = [
	{label: 'Фильмы', typeNumber: 1},
	{label: 'Сериалы', typeNumber: 2},
	{label: 'Мультики', typeNumber: 3}
]
export const SearchDropDown = ({title}:{title:string}) => {
	const tab = searchModel.getTab()
	const dispatch = useAppDispatch()
	const {data} = useSearchMovieQuery({title, tab})

	function onClick(e:any,typeNumber:number){
		// e.preventDefault()
		dispatch(setTab(typeNumber))
		return false
	}

	return (
		<div className={style.dropdown}>
			<div className={style.tab_container}>
				<div className={style.tabs}>
					{/* {tabs.map(({label,typeNumber}:any) => {
						return (
							<button key={label} className={classNames(style.tab, tab == typeNumber && style.active)}
							onClick={(e)=> onClick(e, typeNumber)}
							>{label}</button>
						)
					})} */}
					<button>sdfasdf</button>
				</div>
			</div>
			<div className={style.wrapper}>
				{data?.docs.map((item:any) => {
					console.log(item)
					return (
					<div className={style.box} key={item.id}>
						<div className={style.left}>
							<div className={style.imageContainer}>
								<img  src={item?.poster?.url} alt='' />
							</div>
							<div>
								<div>{item.name}</div>
								<div>{item.year}</div>
							</div>
						</div>
						
					</div>
					)
				})}
			</div>
		</div>
	)
}