import { filterModel } from "@/Entities/filter"
import { Catalog } from "@/widgets/Layout"
const Movies = () => {
	const {ratingFilter, yearFilter, genreFilter, currentPage} = filterModel.useFilterInfo()
	const query = genreFilter? `field=genres.name&search=${genreFilter}` : ''
	const {data, isFetching} = filterModel.useGetFilteredMoviesQuery({ratingFilter, yearFilter, query, currentPage})
	const {pages}:any = {...data}
	return (
		<Catalog
		pages={pages} 
		data={data} 
		isFetching={isFetching} 
		title="Все фильмы" 
		subtitle="Подборка фильмов всего мира"/>
	)
}

export default Movies