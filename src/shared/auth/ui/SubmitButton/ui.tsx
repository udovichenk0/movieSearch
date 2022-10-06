import style from './styles.module.scss'
export const SubmitButton = ({handleAuth}:any) => {
	return (
		<button className={style.submit} onSubmit={handleAuth}>Войти</button>
	)
}