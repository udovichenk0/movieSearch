import style from './styles.module.scss'
export const SubmitButton = ({handleAuth, title}:any) => {
	
	return (
		<button className={style.submit} onSubmit={handleAuth}>{title}</button>
	)
}