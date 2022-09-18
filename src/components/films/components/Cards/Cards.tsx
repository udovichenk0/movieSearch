import style from './cards.module.scss'
import poster from '../../../../assets/poster/poster.jpg'
import { useGetNewFilmsQuery } from '../../../../services/apiConfig'
import { Link } from 'react-router-dom'
export const Cards = () => {
	const {data} = useGetNewFilmsQuery({})
	console.log(data)
	return (
		<div className={style.cards}>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>

			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>

			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			<div className={style.card}>
				<Link to='#' className={style.card__image}>
					<img src={poster} alt="" />
				</Link>
				<div className={style.card__title}>Бэтмен</div>
				<p className={style.card__substring}>2022, фильм</p>
			</div>
			
		</div>
	)
}