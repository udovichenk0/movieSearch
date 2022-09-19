import style from './cards.module.scss'
import { Link } from 'react-router-dom'
import { movieTypes } from '../../../../types/FilmType'
import { cardType } from '../../../../types/someTypes/someTypes'


export const Cards = ({data}:{data: cardType | undefined}) => {
	console.log(data)
	return (
		<div className={style.cards}>
			{data?.docs?.map((item:movieTypes) => {
				return <div key={item.id} className={style.card}>
				<Link to={`/film/${item.id}`} className={style.card__image}>
					<div className={style.card__image}>
						<img className={style.image} src={item?.poster?.previewUrl} alt="" />
					</div>
				</Link>
				<div className={style.card__title}>{item?.name}</div>
				<p className={style.card__substring}>{item?.year}, {item?.type}</p>
			</div>
			})}			
		</div>
	)
}