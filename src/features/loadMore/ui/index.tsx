import { useAppDispatch } from '../../../shared/lib'
import style from './styles.module.scss'
export const LoadMoreButton = ({action}:any) => {
	const dispatch = useAppDispatch()
	const onHandleLoad = (action:any) => {
		dispatch(action())
	}
	return(
		<div className={style.button__wrapper}>
			<button onClick={() => onHandleLoad(action)} className={style.loadMore}>
				Показать ещё
			</button>
		</div>
		
	)
}