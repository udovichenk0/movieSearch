import { useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { useGetMoviesByIdQuery, useGetPersonByIdQuery } from "../../services/apiConfig"
import { SwiperSlider } from "../../shared/slider/Slider"
import { dateConverter } from "../../utils/stringToDate/dateConverter"
import { InfoTable } from "../film/components/AboutFilm/FactsAboutFilm"
import { FooterTabs } from "../UI/Tabs/FooterTabs"
import { Facts } from "../UI/Facts/Facts"
import style from './personInfo.module.scss'
export const Person = () => {
	const id = useParams()
	const {data} = useGetPersonByIdQuery(id.id)
	//@ts-ignore
	const {name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo} = {...data}
	const query = movies?.map((el:any) => `search=${el.id}&field=id`).join('&')
	const {data: filmsData} = useGetMoviesByIdQuery({query, limit: movies?.length})
	const navigate = useNavigate()
	const items = useMemo(() => [
		{leftItem: 'Карьера', rightItem: profession?.map((action:any) => action.value).join(', ')},
		{leftItem: 'Пол', rightItem: sex || '—'},
		{leftItem: 'Рост', rightItem: `${growth} см`},
		{leftItem: 'Дата рождения', rightItem: dateConverter(birthday)},
		{leftItem: 'Дата смерти', rightItem: dateConverter(death)},
		{leftItem: 'Всего фильмов', rightItem: movies?.length || '—'},
		{leftItem: 'Супруга', rightItem: spouses.length? spouses?.map(({name}:  {name: string}) => name) : '—'},
	], [name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo])
	console.log(spouses)
	const filmSerials = filmsData?.docs?.filter((el:any) => {
		if (el.name?.length) {
			return el
        }
	})
	const tabInfo = [
		{title: 'Фильмы и сериалы', content:  <SwiperSlider content={filmSerials} redirect={'film'} title={'Фильмы и сериалы'}/>, condition:movies?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
	return (
		<div className={style.wrapper}>
			<Container>
			<section className={style.section__body}>
				<button className={style.buttonBack} onClick={() => navigate(-1)}>Назад</button>
				<div className={style.box__body}>
					<div className={style.body__poster}>
						<img className={style.poster} src={photo} alt="" />
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{name}</h1>
						<p className={style.body__secondTitle}>{enName}</p>
						<div className="info">
							<InfoTable items={items}/>
						</div>
					</div>
				</div>	
			<FooterTabs tabInfo={tabInfo}/>
			</section>
		</Container>
		</div>	
	)
	
}