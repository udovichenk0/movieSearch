import { SwiperSlider } from '../../../../shared/slider/Slider'
import style from './similarMovies.module.scss'

export const SimilarMovies = ({redirect, similarMovies, title}:any) => {
		if(!similarMovies || !similarMovies?.length) return <></>
return (
		<div className={style.wrapper}>
			<SwiperSlider content={similarMovies} title={title} redirect={redirect}/>
		</div>
	)
}