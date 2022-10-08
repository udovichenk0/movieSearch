import { useParams } from "react-router-dom"
import { SwiperSlider } from "@/widgets/sliderBlock"
import style from './styles.module.scss'
import { useGetMovieByIdQuery } from "@/shared/api"
import { useActors, useInfo } from "./lib"
import { Comments,MovieInfo } from "./sections"
import { BackButton } from "@/shared/ui/BackButton"
import { Layout } from "@/shared/ui/Layout"
import { FooterTabs } from "@/shared/ui/Tabs"
const MoviePage = () => {
	const {id} = useParams<string>()
	const {data, isLoading} = useGetMovieByIdQuery(id)
	const {name,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster
	}= {...data}
	//@ts-ignore
	const {description,similarMovies,persons,facts}= {...data}
	const actors = useActors(persons)
	const info = useInfo({description, actors, facts, style})
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.section__body}>
					<BackButton/>
					<MovieInfo
					name={name}
					countries={countries}
					rating={rating}
					genres={genres}
					slogan={slogan}
					ageRating={ageRating}
					budget={budget}
					alternativeName={alternativeName}
					movieLength={movieLength}
					premiere={premiere}
					fees={fees}
					poster={poster}
					isLoading={isLoading}
					id={id}
					/>
					<FooterTabs tabInfo={info}/>
					{similarMovies?.length != 0 && <SwiperSlider content={similarMovies} title={'Похожее кино'} redirect={'film'}/>}
					<Comments id={id}/>
				</div>
			</div>
		</Layout>
	)
}

export default MoviePage