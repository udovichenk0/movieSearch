import classnames from "classnames"
import { Container } from "../../common/containerStyle/container"
import { Cards } from "./components/Cards/Cards"
import { NewFilms } from "./components/newFilms/newFilms"
import { NewSerials } from "./components/newSerials/NewSerials"
import { Panel } from "./components/Panel/Panel"
import style from './films.module.scss'
export const HeroCards = () => {
	return (
		<Container>
			<div className={style.wrapper}>
			<NewFilms/>
			<NewSerials/>
			</div>
		</Container>
	)
}