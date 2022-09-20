
import { showMoreSerial } from '../../../reduxStore/ShowMore/showMore.slice'
import { useAppDispatch } from '../../../utils/typedHooks/useAppHooks'
import style from './loadMore.module.scss'


export const LoadMoreButton = ({handleOnClick}:any) => {
	return(
		<div className={style.button__wrapper}>
			<button onClick={handleOnClick} className={style.loadMore}>
				Показать ещё
			</button>
		</div>
		
	)
}