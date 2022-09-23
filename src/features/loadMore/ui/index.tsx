import { useAppDispatch } from '../../../utils/typedHooks/useAppHooks'
import style from './styles.module.scss'
export const LoadMoreButton = ({action}:any) => {
	const dispatch = useAppDispatch()
	function handleOnClick(){
		dispatch(action())
	}
	return(
		<div className={style.button__wrapper}>
			<button onClick={handleOnClick} className={style.loadMore}>
				Показать ещё
			</button>
		</div>
		
	)
}