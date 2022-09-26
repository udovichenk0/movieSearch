import { Facts } from "../../shared/ui"
import { FilmType } from "../../types/FilmType"
import { SwiperSlider } from "../../widgets/sliderBlock"

export const usePersonInfo = ({filmSerials, movies, facts}:any) => {
	return [
		{title: 'Фильмы и сериалы', content:  <SwiperSlider content={filmSerials} redirect={'film'} title={'Фильмы и сериалы'}/>, condition:movies?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
}

export const useFilms = ({filmsData}:any) => 
	filmsData?.docs?.filter((item:FilmType) => item.name?.length)