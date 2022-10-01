import { useAppSelector } from "../../../shared/lib"

export const useFilterInfo = () => {
	const ratingFilter = useAppSelector(state => state.filterSlice.rating)
	const yearFilter = useAppSelector(state => state.filterSlice.year)
	const genreFilter = useAppSelector(state => state.filterSlice.genre)

	return {ratingFilter, yearFilter, genreFilter}
}