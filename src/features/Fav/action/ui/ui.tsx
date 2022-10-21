import { useToggleMovie } from '../model'
import style from './styles.module.scss'
import classnames from 'classnames';
import {FavIcon} from '@/shared/assets/favorite';
import { CheckMarkIcon } from '@/shared/assets/checkmark';
import { useAuth } from '@/shared/lib';
import { useNavigate } from 'react-router-dom';
export const AddMovie = ({id, customStyle}:any) => {
	const {handleToggle, favorites} = useToggleMovie()
	const navigate = useNavigate()
	const {isAuth} = useAuth()
	return (
			<button onClick={() => isAuth? handleToggle(id) : navigate('/login')} className={classnames(customStyle,style.button, favorites.includes(id)? style.favorite : style.notfavorite)}>
				{favorites.includes(id)
				? <CheckMarkIcon size={15} style={style.svgHover} color={'rgb(80, 80, 158)'}/>
				: <FavIcon size={15} color={'black'}/>
				}
				Буду смотреть
			</button> 
	)		
}