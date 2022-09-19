import { Container } from "../../common/containerStyle/container"
import style from './home.module.scss'
import { Button } from "./components/button/Button"
import {FiArrowRight} from 'react-icons/fi';
import { useNavigate } from "react-router-dom"
import { HeroCards } from "../films/films";
export const Home = () => {
const navigate = useNavigate()
	return (
		<div>
			<section className={style.wrapper}>
			<Container>
					<div className={style.main__body}>
					<h2 className={style.main__title}>Тор: Любовь и гром</h2>
					<div className={style.main__description}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</div>
					<Button onClick={() => navigate('film/1282688')}  title='Подробнее' icon={<FiArrowRight/>}/>
					</div>
			</Container>
		</section>
			<HeroCards/>
		</div>
		
	)
}