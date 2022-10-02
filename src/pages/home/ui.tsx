import { Container } from "../../app/styles/container"
import { Layout } from "../../shared/ui/Layout/Layout"
import { Banner } from "./sections/banner"
import style from './styles.module.scss'
import { NewFilms } from "./sections/newFilms/newFilms"
import { NewSerials } from "./sections/newSerials"
import { homeModel } from "../../Entities/home"
import { Preloader } from "../../shared/ui"
export const HomePage = () => {
	const {data, isLoading} = homeModel.useGetNewMoviesQuery(homeModel.getMovieLimit())
	const {data: serialData} = homeModel.useGetNewSerialsQuery(homeModel.getSerialLimit())
	return (
		<Layout>
			<Banner/>
			<div className={style.cards__body}>
			<Container>
				{isLoading? <div className={style.preloader}><Preloader/> </div>
				: 
				<>
				<NewFilms data={data}/>
				<NewSerials data={serialData}/>
				</>
				}
			</Container>
			</div>
		</Layout>
		
	)
}