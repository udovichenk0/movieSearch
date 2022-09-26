import { Link } from "react-router-dom"
import { LogoSvg } from "../../shared/assets/logo/LogoSvg"
import { Container } from "../../common/containerStyle/container"
import style from './footer.module.scss'
const links = [
	{name: 'Фильмы', link: '/films'},
	{name: 'Сериалы', link: '/films'},
	{name: 'Мультики', link: '/films'}
]
export const Footer = () => {
	return (
		<div className={style.footer}>
			<Container>
				<div className={style.footer__block}>
					<div className={style.footer__logo}>
						<LogoSvg/>
					</div>
					<div className={style.footer__links}>
						{links.map(({name, link}:any) => <Link key={name} 
						className={style.footer__link} to={link}>{name}
						</Link>)}
					</div>
					<p className={style.footer__watermark}>© 2022 Kinomore</p>
				</div>
			</Container>
		</div>
	)
}