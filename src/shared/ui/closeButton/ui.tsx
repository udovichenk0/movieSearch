import style from './styles.module.scss'
export const CloseButton = ({onClick}:any) => {
	return (
		<button className={style.close} onClick={onClick}></button>
	)
}