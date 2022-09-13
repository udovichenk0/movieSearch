import style from './ButtonStore.module.scss'
export const ButtonStore = ({title} :any) => {
	return (
		<button className={style.button__store}>{title}</button>
	)
}