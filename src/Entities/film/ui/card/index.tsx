import { Link } from "react-router-dom"
import { SliderCardType } from "../../model/type"
import style from './styles.module.scss'
export const SliderCard = ({name, redirect, id, photo, poster}:SliderCardType) => {
	const slidePhoto = photo? photo : poster?.url
	return (
	<div className={style.card}>
		<Link to={`/${redirect}/${id}`}><img className={style.image} loading="lazy" src={slidePhoto} alt="" />
		
		</Link>
			<div className={style.name}>{name}</div>
	</div>
	)
}