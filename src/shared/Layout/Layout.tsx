import { Header } from "../../compontens/header/Header";
import { Footer } from "../../compontens/footer/Footer";


export const Layout = ({children}:any) => {
	return (
		<>
		<Header/>
			{children}
		<Footer/>
		</>
	)
}