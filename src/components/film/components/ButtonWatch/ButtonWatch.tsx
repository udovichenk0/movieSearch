import style from './ButtonWatch.module.scss'
export const ButtonWatch = ({title} :{title: string}) => {
	return (
		<button className={style.button__watch}>{title}</button>
	)
}