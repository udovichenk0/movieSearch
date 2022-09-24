import { Link } from "react-router-dom"
import { SliderCardType } from "../../model/type"
import style from './styles.module.scss'
export const SliderCard = ({name, redirect, id, photo, poster}:SliderCardType) => {
	return (
	<div>
		<Link to={`/${redirect}/${id}`}><img className={style.image}  src={photo || poster?.url} alt="" /></Link>
		<div className={style.name}>{name}</div>
	</div>
	)
}