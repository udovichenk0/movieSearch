import './dropdown.scss'
import {CartoonSvg, MovieSvg, FavoriteSvg,SerialSvg, HomeSvg} from '../../../../shared/assets'
import { Link, NavLink } from 'react-router-dom'
const categories = [
	{title: 'Главная', icon: HomeSvg, link: '/'},
	{title: 'Фильмы', icon: MovieSvg, link: '/movies'},
	{title: 'Сериалы', icon: SerialSvg, link: '/series'},
	{title: 'Мультики', icon: CartoonSvg, link: '/cartoons'},
	{title: 'Избранное', icon: FavoriteSvg, link: '/favorites'},
]

export const DropDown = ({isClicked}:{isClicked: boolean}) => {
	return (
			<div className={`block__menu menu ${isClicked? 'open' : ''}`}>
				<ul className="menu__list">
					{categories.map(({title, icon, link}) => {
						return(
						<li key={title} className="menu__link">
							<Link to={link} className={'link'}>
								<img src={icon} alt="" />
								<div className="menu__item">{title}</div>
							</Link>
							</li>
							)
					})}
				</ul>
			</div>
		
	)
}