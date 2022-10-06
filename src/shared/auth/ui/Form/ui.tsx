import style from './styles.module.scss'
export const Form = ({children, handleAuth}:any) => {
	return (
		<div className={style.container}>
			<form className={style.form} action="" onSubmit={handleAuth}>
				{children}
			</form>
		</div>
	)
}