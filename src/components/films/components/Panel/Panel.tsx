import style from './panel.module.scss'
export const Panel = ({title}:{title:string}) => {
	return (
		<div className={style.panel}>
				<h1 className={style.panel__title}>Новые {title}</h1>
				<button className={style.panel__button}>Смотреть все</button>
			</div>
	)
}