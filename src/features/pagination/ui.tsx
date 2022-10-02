import style from './styles.module.scss'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { filterModel } from '../../Entities/filter';
import { useAppDispatch } from '../../shared/lib';
import { useEffect } from 'react';

export const Pagination = ({pages}:{pages:number}) => {
	const {currentPage} = filterModel.useFilterInfo()
	const dispatch = useAppDispatch()
	const onNextClick = () => {
		dispatch(filterModel.setPage(currentPage + 1))
	}
	const onPrevClick = () => {
		dispatch(filterModel.setPage(currentPage - 1))
	}
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [currentPage])
	return (
		<>
		<div className={style.pagination}>
			<button disabled={currentPage === 1 || currentPage === pages}
			onClick={onPrevClick} className={style.pagination__prev}><AiOutlineLeft/></button>
			<div className={style.pagination__info}>{currentPage}\{pages}</div>
			<button onClick={onNextClick} className={style.pagination__next}>{<AiOutlineRight/>}</button>
		</div>
		</>
	)
}
