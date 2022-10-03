import { Layout } from "@/shared/ui/Layout"
import { Preloader } from "@/shared/ui/Loader"
import { Panel } from "@/shared/ui/Panel"
import { InfoCard } from "../../Entities/infoCard"
import { AddMovie } from "../../features/Fav"
import { FilterForm } from "../../features/filter"
import { Pagination } from "../../features/pagination"

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
							return <InfoCard key={id}
							poster={poster}
							id={id}
							name={name}
							movieLength={movieLength}
							year={year}
							description={description}
							rating={rating}
							customStyle={style.addToLS}
							>
							<AddMovie id={id} customStyle={style.addToLS}/>
							</InfoCard>
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