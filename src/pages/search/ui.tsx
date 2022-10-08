import { filterModel } from "@/Entities/filter"
import { Catalog } from "@/widgets/Layout"
import { useParams } from "react-router-dom"
const Search = () => {
	const {title} = useParams()
	const {ratingFilter, yearFilter, genreFilter, currentPage} = filterModel.useFilterInfo()
	const query = genreFilter? `field=genres.name&search=${genreFilter}` : ''
	const {data, isFetching} = filterModel.useGetMovieBySearchQuery({ratingFilter, yearFilter, query, currentPage,title})
	const {pages}:any = {...data}
	return (
		<Catalog
		pages={pages} 
		data={data} 
		isFetching={isFetching} 
		title={`Результаты поиска по запросу: ${title}`}
		subtitle="Ничего не нашли? Список всех фильмов"/>
	)
}

export default Search