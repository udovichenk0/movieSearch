import { filterModel } from "../../Entities/filter"
import { Catalog } from "../../widgets/catalog"
const Serials = () => {
	const {ratingFilter, yearFilter, genreFilter, currentPage} = filterModel.useFilterInfo()
	const query = genreFilter? `field=genres.name&search=${genreFilter}` : ''
	const {data, isFetching} = filterModel.useGetFilteredSerialsQuery({ratingFilter, yearFilter, query, currentPage})
	const {pages}:any = {...data}
	return (
		<Catalog
		pages={pages} 
		data={data} 
		isFetching={isFetching} 
		title="Все сериалы" 
		subtitle="Подборка сериалов всего мира"/>
	)
}

export default Serials