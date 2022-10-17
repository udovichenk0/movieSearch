import { Facts } from "@/shared/ui/Facts"
import { FactsType } from "@/types/FactsType"
import { FilmType, movieTypes } from "@/types/FilmType"
import { MoviesType } from "@/types/PersonType"
import { SwiperSlider } from "@/widgets/sliderBlock"

type usePersonInfoType = {
	films: movieTypes
	movies?: MoviesType[]
	facts?: FactsType[]
}
export const usePersonInfo = ({films, movies, facts}: usePersonInfoType) => {
	
	console.log(films)
	return [
		{title: 'Фильмы и сериалы', content:  <SwiperSlider content={films} redirect={'film'} title={'Фильмы и сериалы'}/>, condition:movies?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
}

export const useFilms = (filmsData:any) => {
	return filmsData?.docs?.filter((item:FilmType) => item.name?.length)
}