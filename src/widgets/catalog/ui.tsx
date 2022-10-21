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
	console.log(data?.docs?.length)
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<section className={style.section}>
					<Panel title={title} subtitle={subtitle}/>
						<div className={style.block}>	
					<FilterButton onClick={() => setClose(false)}/>
						{data?.docs?.length &&
						<div className={classnames(style.filter__container, isClosed && style.active)}>
							<div className={style.mobile__headerFilter}>
								<CloseButton onClick={() => setClose(true)}/>
							</div>
							<FilterForm/>
						</div>
						}
					{isFetching	
						? <div className={style.loader}>
							<Preloader/>
						</div>
						: data?.docs?.length? <div>
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
					: <div style={{width: '100%', marginTop: '70px',fontSize:'22px', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<h1>Вы ничего не добавляли в избранное</h1>
					</div>
					}
						</div>
					</section>
					{!isFetching && pages > 1 && data?.docs?.length && <Pagination pages={pages}/>}
				</div>
			</div>
		</Layout>
	)
}