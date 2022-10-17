import style from './personInfo.module.scss'
import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useGetMoviesByIdQuery, useGetPersonByIdQuery } from "@/shared/api"
import { dateConverter } from "@/shared/lib"
import { PersonInfo } from "./sections"
import { useFilms, usePersonInfo } from "./lib"
import { FooterTabs } from '@/shared/ui/Tabs'
import { BackButton } from '@/shared/ui/BackButton'
import { Layout } from '@/shared/ui/Layout'
const InfoPerson = () => {
	const id = useParams()
	const {data} = useGetPersonByIdQuery(id.id)
	//@ts-ignore
	const {name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo} = {...data}
	const query = movies?.map((item:any /* queryType */) => {
		return `search=${item.id}&field=id`}).join('&')
	const {data: filmsData} = useGetMoviesByIdQuery({query, limit: movies?.length})
	const items = useMemo(() => [
		{leftItem: 'Карьера', rightItem: profession?.map((action:any) => action.value).join(', ')},
		{leftItem: 'Пол', rightItem: sex || '—'},
		{leftItem: 'Рост', rightItem: `${growth} см`},
		{leftItem: 'Дата рождения', rightItem: dateConverter(birthday)},
		{leftItem: 'Дата смерти', rightItem: dateConverter(death)},
		{leftItem: 'Всего фильмов', rightItem: movies?.length || '—'},
		{leftItem: 'Супруга', rightItem: spouses?.length? spouses?.map(({name}:  {name: string}) => name) : '—'},
	], [name, enName, sex,death,growth,birthday, profession, movies, facts, spouses, photo])
	const films = useFilms(filmsData)
	const info = usePersonInfo({films, movies, facts})
	return (
		<Layout>
			<div className={style.wrapper}>
				<div className={style.container}>
					<BackButton/>
					<PersonInfo
					photo={photo}
					name={name}
					enName={enName}
					items={items}/>	
					<FooterTabs tabInfo={info}/>
				</div>
			</div>	
		</Layout>)
}

export default InfoPerson