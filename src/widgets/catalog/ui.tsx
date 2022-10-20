import { Layout } from "@/shared/ui/Layout"
import { Preloader } from "@/shared/ui/Loader"
import { Panel } from "@/shared/ui/Panel"
import { InfoCard } from "@/Entities/infoCard"
import { AddMovie } from "@/features/Fav"
import { FilterForm } from "@/features/filter"
import { Pagination } from "@/features/pagination"

import style from './styles.module.scss'
import { CloseButton } from "@/shared/ui/closeButton"
import { useState } from "react"
import classnames from "classnames"
import { FilterButton } from "@/shared/ui/FilterButton"
export const Catalog = ({pages, data, isFetching, title, subtitle}:any) => {
	const [isClosed, setClose] = useState(true)
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<section className={style.section}>
					<Panel title={title} subtitle={subtitle}/>
					<FilterButton onClick={() => setClose(false)}/>
						<div className={style.block}>	
						<div className={classnames(style.filter__container, isClosed && style.active)}>
							<div className={style.mobile__headerFilter}>
								<CloseButton onClick={() => setClose(true)}/>
							</div>
							<FilterForm/>
						</div>
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
							>
							<AddMovie id={id} customStyle={style.addToLS}/>
							</InfoCard>
						})}
					</div>
					}
			</div>
					</section>
					{!isFetching && pages > 1 && <Pagination pages={pages}/>}
				</div>
			</div>
		</Layout>
	)
}