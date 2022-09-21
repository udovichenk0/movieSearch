import { useNavigate } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { Layout } from "../../shared/ui/Layout/Layout"
import { Banner } from "./sections/banner"
import style from './styles.module.scss'
import { NewFilms } from "./sections/newFilms/newFilms"
import { NewSerials } from "./sections/newSerials"
export const HomePage = () => {
	const navigate = useNavigate()
	return (
		<Layout>
			<Banner/>
			<div className={style.cards__body}>
			<Container>
				<NewFilms/>
				<NewSerials/>
			</Container>
			</div>
		</Layout>
		
	)
}