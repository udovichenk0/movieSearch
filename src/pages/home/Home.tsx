import { FiArrowRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { Button } from "./ui/button/Button"
import { Layout } from "../../shared/ui/Layout/Layout"
import style from './home.module.scss'
import { NewFilms } from "./ui/newFilms/newFilms"
import { NewSerials } from "./ui/newSerials/NewSerials"
export const HomePage = () => {
	const navigate = useNavigate()
	return (
		<Layout>
			<div>
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
		<div className={style.cards__body}>
		<Container>
			<NewFilms/>
			<NewSerials/>
		</Container>
			</div>
		</div>
		</Layout>
		
	)
}