import { FiArrowRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { Container } from "@/app/styles/container"
import style from './styles.module.scss'
export const Banner = () => {
	const navigate = useNavigate()
	return (
		<section className={style.wrapper}>
			<Container>
				<div className={style.main__body}>
				<h2 className={style.main__title}>Тор: Любовь и гром</h2>
				<div className={style.main__description}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</div>
				<button onClick={() => navigate('film/1282688')} className={style.button}>Подробнее
			<div className={style.icon}>
			<FiArrowRight/>
			</div>
		</button>
			</div>
			</Container>
		</section>
	)
}