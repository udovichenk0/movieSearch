import { HeaderStyled } from "./styledHeader"
import { Container } from "../../common/containerStyle/container"
import { Burger } from "./components/burger/burder"
import { useRef, useState } from "react"
import { DropDown } from "./components/dropDown/dropDown"
import { LogoSvg } from "../../assets/logo/LogoSvg"
import style from './header.module.scss'
import { Search } from "./components/search/Search"
import { NavLink, useNavigate } from "react-router-dom"
export const Header = () => {
	const ref = useRef<any>(null)
	const [isClicked, setClick] = useState(false)
	const navigate = useNavigate()
	function onLogoClick(){
		navigate('/', {replace: true})
	}
	return (
	<HeaderStyled>
		<Container>
		<div className={style.header__box} ref={ref}>	
			<Burger reference={ref} 
			isClicked={isClicked}
			setClick={setClick}/>
			<DropDown isClicked={isClicked}/>
			<div className={style.logo} onClick={onLogoClick}>
				<LogoSvg/>
			</div>
			<Search/>

				<div className={style.empty}></div>
			<NavLink className={style.header__login_box} to={'/login'}>
				<div className={style.header__login}>Login</div>
			</NavLink>
			</div>
		</Container>
	</HeaderStyled>
	)
}