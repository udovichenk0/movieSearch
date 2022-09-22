import style from './ButtonStore.module.scss'
export const ButtonStore = ({title} :{title: string}) => {
	return (
		<button className={style.button__store}>{title}</button>
	)
}