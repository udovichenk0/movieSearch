import style from './styles.module.scss'
type PropsType = {
	title: string
	subtitle: string
}
export const Panel = ({title, subtitle}: PropsType)  => {
	
	return (
			<div className={style.wrapper}>
				<h1 className={style.title}>{title}</h1>
				<p className={style.subtitle}>{subtitle}</p>
			</div>
		)
}