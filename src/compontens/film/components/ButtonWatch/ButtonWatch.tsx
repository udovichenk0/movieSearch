import style from './ButtonWatch.module.scss'
export const ButtonWatch = ({title} :any) => {
	return (
		<button className={style.button__watch}>{title}</button>
	)
}