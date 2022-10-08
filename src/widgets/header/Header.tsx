import { Container } from "@/app/styles/container"
import { Burger } from "./burger/burgerButton/burder"
import { useRef, useState } from "react"
import { DropDown } from "./burger/burgerDropDown/dropDown"
import style from './header.module.scss'
import { Search } from "@/features/searchMovie/ui"
import { Link, useNavigate } from "react-router-dom"
import { LogoSvg } from "@/shared/assets/logo"
import { useAuth } from "@/shared/lib"
export const Header = () => {
	const ref = useRef<null>(null)
	const [isClicked, setClick] = useState(false)
	const navigate = useNavigate()
	const {isAuth, email} = useAuth()

	return (
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
				
				{isAuth? <div className={style.header__login}>{email}</div>
				: <Link className={style.header__login_box} to={'/login'}>
					<div className={style.header__login}>Войти</div>
				</Link>
				}
			</div>
		</Container>
			</div>
	)
}