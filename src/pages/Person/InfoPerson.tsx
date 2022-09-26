import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { InfoTable } from "../../shared/ui/AboutFilm/FactsAboutFilm"
import { useGetMoviesByIdQuery, useGetPersonByIdQuery } from "../../shared/api/apiConfig"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { Facts } from "../../shared/ui/Facts/Facts"
import { Layout } from "../../shared/ui/Layout/Layout"
import { FooterTabs } from "../../shared/ui/Tabs/FooterTabs"
import { FilmType } from "../../types/FilmType"
import { SwiperSlider } from "../../widgets/sliderBlock/Slider"
import style from './personInfo.module.scss'
import { dateConverter } from "../../shared/lib"
import { PersonInfo } from "./sections"
const InfoPerson = () => {
	const id = useParams()
	const {data, isLoading} = useGetPersonByIdQuery(id.id)
	//@ts-ignore
	const {name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo} = {...data}
	const query = movies?.map((item:any /* queryType */) => {
		return `search=${item.id}&field=id`}).join('&')
	const {data: filmsData} = useGetMoviesByIdQuery({query, limit: movies?.length})
	const navigate = useNavigate()
	const items = useMemo(() => [
		{leftItem: 'Карьера', rightItem: profession?.map((action:any) => action.value).join(', ')},
		{leftItem: 'Пол', rightItem: sex || '—'},
		{leftItem: 'Рост', rightItem: `${growth} см`},
		{leftItem: 'Дата рождения', rightItem: dateConverter(birthday)},
		{leftItem: 'Дата смерти', rightItem: dateConverter(death)},
		{leftItem: 'Всего фильмов', rightItem: movies?.length || '—'},
		{leftItem: 'Супруга', rightItem: spouses?.length? spouses?.map(({name}:  {name: string}) => name) : '—'},
	], [name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo])
	const filmSerials = filmsData?.docs?.filter((item:FilmType) => {
		if (item.name?.length) {
			return item
        }
	})
	const tabInfo = [
		{title: 'Фильмы и сериалы', content:  <SwiperSlider content={filmSerials} redirect={'film'} title={'Фильмы и сериалы'}/>, condition:movies?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
	const actorName = isLoading? 'Загрузка..' : name
	const actorEnName = isLoading? 'Загрузка..' : enName
	return <Layout>
				<div className={style.wrapper}>
			<div className={style.section__body}>
				<BackButton/>
				<PersonInfo
				photo={photo}
				actorName={actorName}
				actorEnName={actorEnName}
				items={items}
				/>	
			<FooterTabs tabInfo={tabInfo}/>
			</div>
		</div>	
			</Layout>
}

export default InfoPerson