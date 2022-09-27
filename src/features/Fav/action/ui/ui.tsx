import { useToggleMovie } from '../model'
import style from './styles.module.scss'
export const ButtonStore = ({title} :{title: string}) => {
	const movieId = '123123'
	const {handleToggle} = useToggleMovie({movieId: '333332222'})
	return (
		<button onClick={handleToggle} className={style.button__store}>{title}</button>
	)
}