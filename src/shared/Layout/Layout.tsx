import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import style from './layout.module.scss'

export const Layout = ({children}:{children: React.ReactNode}) => {
	return (
		<>
		<Header/>
		<div className={style.wrapper}>
			{children}
		</div>
		<Footer/>
		</>
	)
}