import style from './panel.module.scss'
export const Panel = () => {
	return (
		<div className={style.panel}>
				<h1 className={style.panel__title}>Новые фильмы</h1>
				<button className={style.panel__button}>Смотреть все</button>
			</div>
	)
}