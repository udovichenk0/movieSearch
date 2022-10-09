import style from './styles.module.scss'
import { filterModel } from '../../Entities/filter';
import { useAppDispatch } from '../../shared/lib';
import { BackIcon } from '@/shared/assets/backButton';

export const Pagination = ({pages}:{pages:number}) => {
	const {currentPage} = filterModel.useFilterInfo()
	const dispatch = useAppDispatch()
	const onNextClick = () => {
		window.scrollTo(0, 0)
		dispatch(filterModel.setPage(currentPage + 1))
	}
	const onPrevClick = () => {
		window.scrollTo(0, 0)
		dispatch(filterModel.setPage(currentPage - 1))
	}
	return (
		<>
		<div className={style.pagination}>
			<button disabled={currentPage === 1 || currentPage === pages}
			onClick={onPrevClick} className={style.pagination__prev}><BackIcon style=''/></button>
			<div className={style.pagination__info}>{currentPage}\{pages}</div>
			<button onClick={onNextClick} className={style.pagination__next}>{
				<div className={style.box}>
					<BackIcon style=''/>
				</div>
				}</button>
		</div>
		</>
	)
}
