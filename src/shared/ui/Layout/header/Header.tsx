import { HeaderStyled } from "./styledHeader"
import { Container } from "../../../../common/containerStyle/container"
import { Burger } from "./burger/burgerButton/burder"
import { useRef, useState } from "react"
import { DropDown } from "./burger/burgerDropDown/dropDown"
import style from './header.module.scss'
import { Search } from "../../../../features/searchMovie/ui/SearchMovie"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../../shared/lib/hooks/useAuth"
import { useAppDispatch } from "../../../../utils/typedHooks/useAppHooks"
import { logOutUser } from "../../../../reduxStore/Auth/auth.slice"
import { LogoSvg } from "../../../assets"
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
				? <Link className={style.header__login_box} to={'/login'}>
					<div className={style.header__login}>Login</div>
				</Link>
				: <button onClick={() => dispatch(logOutUser())} className={style.header__login}>Logout</button>
				}
			</div>
		</Container>
			</div>
	</HeaderStyled>
	)
}