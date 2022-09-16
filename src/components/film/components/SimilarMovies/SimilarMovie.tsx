import { SwiperSlider } from '../../../../shared/slider/Slider'
import style from './similarMovies.module.scss'
type SimilarMovieType = {
	redirect: string
	similarMovies: {
		alternativeName: string
		enName: string
		id: number
		name: string
		poster: {
			previewUrl: string
			url: string
			_id: string
		}[]
	}[]
	title: string
}


export const SimilarMovies = ({redirect, similarMovies, title}:any) => {

		if(!similarMovies || !similarMovies?.length) return <></>
return (
		<div className={style.wrapper}>
			<SwiperSlider content={similarMovies} title={title} redirect={redirect}/>
		</div>
	)
}