import { useNavigate } from "react-router-dom"
import style from './backButton.module.scss'
import { BackIcon } from "@/shared/assets/backButton";
export const BackButton = () => {
	const navigate = useNavigate()
	return <button className={style.buttonBack} onClick={() => navigate(-1)}>
		{<BackIcon style={style.icon__back}/>}Назад
		</button>
}