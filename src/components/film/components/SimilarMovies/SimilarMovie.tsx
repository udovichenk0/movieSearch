import { SwiperSlider } from '../../../../shared/slider/Slider'
import { SimilarMoviesType } from '../../../../types/FilmType'
import style from './similarMovies.module.scss'

type PropsType = {
	redirect: string
	similarMovies: SimilarMoviesType[] | undefined
	title: string
}

export const SimilarMovies = ({redirect, similarMovies, title}:PropsType) => {

		if(!similarMovies || !similarMovies?.length) return <></>
return (
		<div className={style.wrapper}>
			<SwiperSlider content={similarMovies} title={title} redirect={redirect}/>
		</div>
	)
}