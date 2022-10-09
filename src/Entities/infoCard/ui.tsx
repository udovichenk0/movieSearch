import classnames from "classnames"
import { Link } from "react-router-dom"
import { arountNumber } from "@/shared/lib"
import { ratingColor, textSplitter } from "./lib"
import style from './styles.module.scss'
export const InfoCard = ({poster,id, name, movieLength,year,description,rating, children}:any) => {
return (
		<div className={style.body__card} key={id}>
			<div className={style.body__container}>
				<Link to={`/film/${id}`}>
					<div className={style.body__image}>
						<img className={style.image} src={poster?.url} alt={`${name}`} />
					</div>
				</Link>
				<article className={style.body__article}>
					<Link to={`/film/${id}`}>
						<h3 className={style.body__name}>{name}</h3>
					</Link>
					<div className={style.body__info}>
						<div>{year},</div>
						<div>{movieLength} min</div>
					</div>
					<Link to={`/film/${id}`}>
						<div className={style.body__description}>{textSplitter(description)}</div>
					</Link>
				</article>
			</div>
			<div className={style.body__fav}>
				<div className={classnames(style[ratingColor(rating?.kp)], style.mark)}>{arountNumber(rating?.kp)}</div>
				{children}
			</div>
		</div>
)
}