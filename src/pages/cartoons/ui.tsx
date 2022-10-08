import { filterModel } from "@/Entities/filter"
import { Catalog } from "@/widgets/Layout"
const Cartoons = () => {
	const {ratingFilter, yearFilter, genreFilter, currentPage} = filterModel.useFilterInfo()
	const query = genreFilter? `field=genres.name&search=${genreFilter}` : ''
	const {data, isFetching} = filterModel.useGetFilteredCartoonsQuery({ratingFilter, yearFilter, query, currentPage})
	const {pages}:any = {...data}
	return (
		<Catalog
		pages={pages} 
		data={data} 
		isFetching={isFetching} 
		title="Все мультики" 
		subtitle="Подборка мультфильмов всего мира"/>
	)
}

export default Cartoons