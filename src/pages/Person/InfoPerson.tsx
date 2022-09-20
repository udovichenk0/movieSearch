import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { InfoTable } from "../../components/film/components/AboutFilm/FactsAboutFilm"
import { useGetMoviesByIdQuery, useGetPersonByIdQuery } from "../../shared/api/apiConfig"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { Facts } from "../../shared/ui/Facts/Facts"
import { Layout } from "../../shared/ui/Layout/Layout"
import { FooterTabs } from "../../shared/ui/Tabs/FooterTabs"
import { FilmType } from "../../types/FilmType"
import { dateConverter } from "../../utils/stringToDate/dateConverter"
import { SwiperSlider } from "../../widgets/slider/Slider"
import style from './personInfo.module.scss'
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
			<section className={style.section__body}>
				<BackButton/>
				<div className={style.box__body}>
					<div className={style.body__poster}>
						<img className={style.poster} src={photo} alt="" />
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{actorName}</h1>
						<p className={style.body__secondTitle}>{actorEnName}</p>
						<div className="info">
							<InfoTable items={items}/>
						</div>
					</div>
				</div>	
			<FooterTabs tabInfo={tabInfo}/>
			</section>
		</div>	
			</Layout>
}

export default InfoPerson