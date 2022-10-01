import { filterModel } from "../../Entities/filter"
import { Layout, Preloader } from "../../shared/ui"
import { Panel } from "../../shared/ui/Panel/ui"
import { FavCards } from "../../widgets/Cards"
import { FilterForm } from "../../widgets/FilterForm/ui"
import style from './styles.module.scss'
const Serials = () => {
	const {ratingFilter, yearFilter, genreFilter} = filterModel.useFilterInfo()
	const query = genreFilter? `field=genres.name&search=${genreFilter}` : ''
	const {data, isLoading} = filterModel.useGetFilteredSerialsQuery({ratingFilter, yearFilter, query})
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<section className={style.section}>
						<Panel title="Все фильмы" subtitle="Подборка фильмов всего мира"/>
						<div className={style.block}>	
						<FilterForm/>
						<div className={style.box}>
								{isLoading	
								? <div className={style.loader}>
									<Preloader/>
									</div>
								: 
								<div>
									{data?.docs?.map(({poster,id, name, movieLength,year,description,rating}:any) => {
									return <FavCards key={id}
									poster={poster}
									id={id}
									name={name}
									movieLength={movieLength}
									year={year}
									description={description}
									rating={rating}
									/>
								})}
								</div>
								}
						</div>
						</div>
					</section>
				</div>
			</div>
		</Layout>
	)
}

export default Serials