import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import style from './layout.module.scss'

export const Layout = ({children}:{children: React.ReactNode}) => {
	return (
		<div className={style.wrapper}>
			<Header/>
				{children}
			<Footer/>
		</div>
		
		
	)
}