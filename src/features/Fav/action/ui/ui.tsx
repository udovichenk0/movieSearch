import { useToggleMovie } from '../model'
import style from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import classnames from 'classnames';
export const AddMovie = ({movieId} :{movieId: string}) => {
	const {handleToggle, favorites} = useToggleMovie()
	return (
		<button onClick={() => handleToggle(movieId)} className={classnames(style.button, favorites.includes(movieId)? style.favorite : style.notfavorite)}>
			{favorites.includes(movieId)? <AiOutlineCheck/> : <MdFavoriteBorder/>}
			{favorites.includes(movieId)? 'Удалить из избранного' : 'Добавить в избранное'}
		</button>
	)
}