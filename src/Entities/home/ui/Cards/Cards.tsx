import style from './cards.module.scss'
import { Link } from 'react-router-dom'
import { movieTypes } from '../../../../types/FilmType'

export const Cards = ({item}:{item: movieTypes}) => {
	return (
		<div className={style.card}>
			<Link to={`/film/${item.id}`} className={style.card__image}>
				<div className={style.card__image}>
					<img className={style.image} src={item?.poster?.previewUrl} alt={`${item.name}`} />
				</div>
			</Link>
			<div className={style.card__title}>{item?.name}</div>
			<p className={style.card__substring}>{item?.year}, {item?.type}</p>
		</div>
	)
}