import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";


export const Layout = ({children}:{children: React.ReactNode}) => {
	return (
		<>
		<Header/>
			{children}
		<Footer/>
		</>
	)
}