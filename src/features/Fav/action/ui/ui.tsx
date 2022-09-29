import { useToggleMovie } from '../model'
import style from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import classnames from 'classnames';
export const AddMovie = ({movieId, customStyle}:{movieId: string, customStyle: string}) => {
	const {handleToggle, favorites} = useToggleMovie()
	return (
			<button onClick={() => handleToggle(movieId)} className={classnames(customStyle,style.button, favorites.includes(movieId)? style.favorite : style.notfavorite)}>
			{favorites.includes(movieId)? <AiOutlineCheck/> : <MdFavoriteBorder/>}
			Буду смотреть
		</button>
	)
}