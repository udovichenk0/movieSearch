import { filterModel } from "@/Entities/filter"
import { viewerModel } from "@/Entities/viewer"
import { Catalog } from "@/widgets/catalog"

const Favorites = () => {
	const {ratingFilter, yearFilter, currentPage} = filterModel.useFilterInfo()
	const {favorites} = viewerModel.useMovieFavStatus()
	const query = favorites.map(favId => `field=id&search=${favId}&`).join('')
	const {data, isFetching} = filterModel.useGetFilteredFavoriteQuery({ratingFilter, yearFilter, query, currentPage})
	const {pages}:any= {...data}
	console.log(pages)
	return (
		<Catalog
		pages={pages} 
		data={data && query.length} 
		isFetching={isFetching} 
		title="Избранное" 
		subtitle="Ваша подборка избранного"/>
	)
}

export default Favorites