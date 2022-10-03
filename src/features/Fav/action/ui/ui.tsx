import { useToggleMovie } from '../model'
import style from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import classnames from 'classnames';
export const AddMovie = ({id, customStyle}:any) => {
	const {handleToggle, favorites} = useToggleMovie()
	return (
			<button onClick={() => handleToggle(id)} className={classnames(customStyle,style.button, favorites.includes(id)? style.favorite : style.notfavorite)}>
				{favorites.includes(id)? <AiOutlineCheck/> : <MdFavoriteBorder/>}
				Буду смотреть
			</button>
	)		
}