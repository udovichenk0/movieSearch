import { useNavigate } from "react-router-dom"
import style from './backButton.module.scss'
export const BackButton = () => {
	const navigate = useNavigate()
	return <button className={style.buttonBack} onClick={() => navigate(-1)}>Назад</button>
}