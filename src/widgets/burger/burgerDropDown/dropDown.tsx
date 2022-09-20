import './dropdown.scss'
import {CartoonSvg, MovieSvg, FavoriteSvg,SerialSvg, HomeSvg} from '../../../assets/menuIcons/index'
const categories = [
	{title: 'Главная', icon: HomeSvg},
	{title: 'Фильмы', icon: MovieSvg},
	{title: 'Сериалы', icon: SerialSvg},
	{title: 'Мультики', icon: CartoonSvg},
	{title: 'Избранное', icon: FavoriteSvg},
]

export const DropDown = ({isClicked}:{isClicked: boolean}) => {
	return (
			<div className={`block__menu menu ${isClicked? 'open' : ''}`}>
				<ul className="menu__list">
					{categories.map(({title, icon}) => {
						return(
						 <li key={title} className="menu__link">
							<img src={icon} alt="" />
							<a href="" className="menu__item">{title}</a>
							</li>)
					})}
				</ul>
			</div>
		
	)
}