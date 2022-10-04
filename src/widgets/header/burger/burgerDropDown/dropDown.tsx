import './dropdown.scss'
import { Link } from 'react-router-dom'
import { SerialSvg, HomeSvg, MovieSvg, CartoonSvg, FavoriteSvg } from '@/shared/assets/menuIcons'
const categories = [
	{title: 'Главная', icon: HomeSvg, link: '/'},
	{title: 'Фильмы', icon: MovieSvg, link: '/movies'},
	{title: 'Сериалы', icon: SerialSvg, link: '/serials'},
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
								<img className='icon' src={icon} alt={title} />
								<div className="menu__item">{title}</div>
							</Link>
							</li>
							)
					})}
				</ul>
			</div>
		
	)
}