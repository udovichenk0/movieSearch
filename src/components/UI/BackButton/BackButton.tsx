import { useNavigate } from "react-router-dom"
import style from './backButton.module.scss'
import { IoIosArrowBack } from "react-icons/io";
export const BackButton = () => {
	const navigate = useNavigate()
	return <button className={style.buttonBack} onClick={() => navigate(-1)}>
		{<IoIosArrowBack className={style.icon__back}/>}Назад
		</button>
}