import { Header } from "../../../widgets/header/Header";
import { Footer } from "../../../widgets/footer/Footer";
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