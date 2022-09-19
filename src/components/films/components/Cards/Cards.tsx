import style from './cards.module.scss'
import poster from '../../../../assets/poster/poster.jpg'
import { useGetNewFilmsQuery } from '../../../../services/apiConfig'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../utils/typedHooks/useAppHooks'
export const Cards = ({data}:any) => {
	console.log(data)
	return (
		<div className={style.cards}>
			{data?.docs.map((item:any) => {
				return <div key={item.id} className={style.card}>
				<Link to='#' className={style.card__image}>
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