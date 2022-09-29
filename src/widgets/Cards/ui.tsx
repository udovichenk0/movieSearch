import { InfoCard } from "../../Entities/infoCard"
import { AddMovie } from "../../features/Fav"
import style from './styles.module.scss'
export const FavCards = ({poster,id, name, movieLength,year,description,rating}:any) => {
	return (
		<InfoCard 
		poster={poster}
		id={id}
		name={name}
		movieLength={movieLength}
		year={year}
		description={description}
		rating={rating}>
		<AddMovie customStyle={style.fav} movieId={id}/>
		</InfoCard>
	)
}