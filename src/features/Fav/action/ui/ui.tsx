import { useToggleMovie } from '../model'
import style from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import classnames from 'classnames';
import { InfoCard } from '../../../../Entities/infoCard';
export const AddMovie = ({poster,id, name, movieLength,year,description,rating, customStyle}:any) => {
	const {handleToggle, favorites} = useToggleMovie()
	return (
		<InfoCard 
			poster={poster}
			id={id}
			name={name}
			movieLength={movieLength}
			year={year}
			description={description}
			rating={rating}>
			<button onClick={() => handleToggle(id)} className={classnames(customStyle,style.button, favorites.includes(id)? style.favorite : style.notfavorite)}>
				{favorites.includes(id)? <AiOutlineCheck/> : <MdFavoriteBorder/>}
				Буду смотреть
			</button>
		</InfoCard>
	)		
}