import { Link } from 'react-router-dom'
import style from './panel.module.scss'
export const Panel = ({title, link}:{title:string, link: string}) => {
	return (
		<div className={style.panel}>
			<h1 className={style.panel__title}>Новые {title}</h1>
			<Link to={link} className={style.link}>Смотреть все</Link>
		</div>
	)
}