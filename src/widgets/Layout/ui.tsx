import { AddMovie } from "../../features/Fav"
import { FilterForm } from "../../features/filter"
import { Pagination } from "../../features/pagination"
import { Layout, Preloader } from "../../shared/ui"
import { Panel } from "../../shared/ui"
import style from './styles.module.scss'
export const Catalog = ({pages, data, isFetching, title, subtitle}:any) => {
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<section className={style.section}>
					<Panel title={title} subtitle={subtitle}/>
						<div className={style.block}>	
						<FilterForm/>
					{isFetching	
						? <div className={style.loader}>
							<Preloader/>
						</div>
						: <div>
							{data?.docs?.map(({poster,id, name, movieLength,year,description,rating}:any) => {
							return <AddMovie key={id}
							poster={poster}
							id={id}
							name={name}
							movieLength={movieLength}
							year={year}
							description={description}
							rating={rating}
							customStyle={style.addToLS}
							/>
						})}
					</div>
					}
			</div>
					</section>
					{!isFetching && data?.docs.length > 10 && <Pagination pages={pages}/>}
				</div>
			</div>
		</Layout>
	)
}