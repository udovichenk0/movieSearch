import { useGetFilteredMoviesQuery } from "../../shared/api"
import { Layout } from "../../shared/ui"
import { Panel } from "../../shared/ui/Panel/ui"
import { FavCards } from "../../widgets/Cards"
import { FilterForm } from "../../widgets/FilterForm/ui"
import style from './styles.module.scss'
const Movies = () => {
	const limit = 10
	const {data} = useGetFilteredMoviesQuery(limit)
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<section className={style.section}>
						<Panel title="Все фильмы" subtitle="Подборка фильмов всего мира"/>
						<div className={style.block}>	
						<FilterForm/>
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
						</div>
					</section>
				</div>
			</div>
		</Layout>
	)
}

export default Movies