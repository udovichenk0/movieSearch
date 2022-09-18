import { Container } from "../../common/containerStyle/container"
import { Cards } from "./components/Cards/Cards"
import { Panel } from "./components/Panel/Panel"
import style from './films.module.scss'
export const NewFilms = () => {
	return (
		<Container>
			<Panel/>
			<Cards/>
		</Container>
	)
}