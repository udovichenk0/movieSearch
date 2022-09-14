import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { useGetMovieByIdQuery } from "../../services/apiConfig"
import { SwiperSlider } from "../../shared/slider/Slider"
import { dateConverter } from "../../utils/stringToDate/dateConverter"
import { useAppDispatch, useAppSelector } from "../../utils/typedHooks/useAppHooks"
import { validValue } from "../../utils/validValue/validValue"
import { Facts } from "../UI/Facts/Facts"
import { InfoTable } from "./components/AboutFilm/FactsAboutFilm"
import { ButtonStore } from "./components/Button/ButtonStore"
import { ButtonWatch } from "./components/ButtonWatch/ButtonWatch"
import { FooterTabs } from "../UI/Tabs/FooterTabs"
import style from './info.module.scss'

type QuizParams = {
	id: string;
  };
type countriesType ={
name: string
}
export const FilmInfo = () => {
	const id = useParams<QuizParams>()
	const {data, isLoading, isError} = useGetMovieByIdQuery(id.id)
	//@ts-ignore
	const {name,description,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster,persons,facts
	}= {...data}
	const navigate = useNavigate()
	console.log(facts)
	const items = [
		{leftItem: 'Страны', rightItem: countries?.map((action:countriesType) => action.name).join(', ')},
		{leftItem: 'Жанр', rightItem: genres?.map((action:any) => action.name).join(', ')},
		{leftItem: 'Слоган', rightItem: slogan || '—'},
		{leftItem: 'Возраст', rightItem: ageRating || '—'},
		{leftItem: 'Бюджет', rightItem: `${budget?.currency || ``} ${validValue(budget?.value || '—')}`},
		{leftItem: 'Время', rightItem: `${movieLength} 	min`},
		{leftItem: 'Сборы в США', rightItem: `${fees?.usa?.currency || ''} ${validValue(fees?.usa.value || '—')}`},
		{leftItem: 'Сборы в мире', rightItem: `${fees?.world?.currency || ''} ${validValue(fees?.world.value || '—')}`},
		{leftItem: 'Премьера в мире', rightItem: dateConverter(premiere?.world)},
	]
	const actors = persons?.filter((el:any) => {
		if (el.enProfession === 'actor' && el?.name?.length) {
			return el
        }
	})
	const tabInfo = [
		{title: 'Описание', content: <h2 className={style.description}>{description}</h2>, condition: description?.length},
		{title: 'Актёры', content:  <SwiperSlider content={actors} title={'Актёры'} redirect={'name'}/>, condition:actors?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
	
	return (
		<div className={style.wrapper}>
			<Container>
			<section className={style.section__body}>
				<button className={style.buttonBack} onClick={() => navigate(-1)}>Назад</button>
				<div className={style.box__body}>
					<div className={style.body__poster}>
						<div className={style.image__container}>
							<img className={style.poster} src={poster?.url} alt="" />
						</div>
						<div className={style.body__rating}>{rating?.kp}</div>
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{name}</h1>
						<p className={style.body__secondTitle}>{alternativeName}</p>
						<div className={style.body__buttons}>
							<ButtonWatch title={'Смотреть'}/>
							<ButtonStore title={'Буду смотреть'}> </ButtonStore>
						</div>
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