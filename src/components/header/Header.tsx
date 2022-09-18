import { HeaderStyled } from "./styledHeader"
import { Container } from "../../common/containerStyle/container"
import { Burger } from "./components/burger/burder"
import { useRef, useState } from "react"
import { DropDown } from "./components/dropDown/dropDown"
import { LogoSvg } from "../../assets/logo/LogoSvg"
import style from './header.module.scss'
import { Search } from "./components/search/Search"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useAppDispatch } from "../../utils/typedHooks/useAppHooks"
import { logOutUser } from "../../reduxStore/Auth/auth.slice"
export const Header = () => {
	const ref = useRef<null>(null)
	const [isClicked, setClick] = useState(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {isAuth} = useAuth()
	return (
	<HeaderStyled>
		<div className={style.header__box} ref={ref}>	
		<Container>
			<div className={style.wrapper}>
				<Burger reference={ref} 
			isClicked={isClicked}
			setClick={setClick}/>
			<DropDown isClicked={isClicked}/>
			<div className={style.logo} onClick={() => navigate('/', {replace: true})}>
				<LogoSvg/>
			</div>
			<Search/>

				<div className={style.empty}></div>
				{!isAuth
				? <NavLink className={style.header__login_box} to={'/login'}>
					<div className={style.header__login}>Login</div>
				</NavLink>
				: <button onClick={() => dispatch(logOutUser())} className={style.header__login}>Logout</button>
				}
			</div>
		</Container>
			</div>
	</HeaderStyled>
	)
}