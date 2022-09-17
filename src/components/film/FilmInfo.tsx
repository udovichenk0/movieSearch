import { useNavigate, useParams } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { useGetMovieByIdQuery } from "../../services/apiConfig"
import { SwiperSlider } from "../../shared/slider/Slider"
import { dateConverter } from "../../utils/stringToDate/dateConverter"
import { validValue } from "../../utils/validValue/validValue"
import { Facts } from "../UI/Facts/Facts"
import { InfoTable } from "./components/AboutFilm/FactsAboutFilm"
import { ButtonStore } from "./components/Button/ButtonStore"
import { ButtonWatch } from "./components/ButtonWatch/ButtonWatch"
import { FooterTabs } from "../UI/Tabs/FooterTabs"
import style from './info.module.scss'
import { SimilarMovies } from "./components/SimilarMovies/SimilarMovie"
import { Rating } from "../UI/Rating/Rating"
import { Review } from "../UI/Review/Review"
import { BackButton } from "../UI/BackButton/BackButton"

type QuizParams = {
	id: string;
  };
type countriesType ={
name: string
}
export const FilmInfo = () => {
	const id = useParams<QuizParams>()
	const {data, isLoading} = useGetMovieByIdQuery(id.id)
	//@ts-ignore
	const {name,description,similarMovies,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster,persons,facts
	}= {...data}
	const navigate = useNavigate()
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
	const actors = persons?.filter(item => {
		if (item.enProfession === 'actor' && item?.name?.length) {
			return item
        }
	})
	const tabInfo = [
		{title: 'Описание', content: <h2 className={style.description}>{description}</h2>, condition: description?.length},
		{title: 'Актёры', content:  <SwiperSlider content={actors} title={'Актёры'} redirect={'name'}/>, condition:actors?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
	const titleName = isLoading? 'Загрузка..' : name
	const alternativeTitleName = isLoading? 'Загрузка..' : alternativeName
	return (
			<div className={style.wrapper}>
			<Container>
			<section className={style.section__body}>
				<BackButton/>
				<div className={style.box__body}>
					<div className={style.body__poster}>
						<div className={style.image__container}>
							<img className={style.poster} src={poster?.url} alt="" />
						</div>
						<Rating ratingStyle={style.body__rating} rating={rating?.kp}/>
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{titleName}</h1>
						<p className={style.body__secondTitle}>{alternativeTitleName}</p>
						<div className={style.body__buttons}>
							<ButtonWatch title={'Смотреть'}/>
							<ButtonStore title={'Буду смотреть'}/>
						</div>
						<div className="info">
							<InfoTable items={items}/>
						</div>
					</div>
				</div>	
			<FooterTabs tabInfo={tabInfo}/>
			<SimilarMovies similarMovies={similarMovies} title={'Похожее кино'} redirect={'film'}/>
			<Review id={id.id}/>
			</section>
		</Container>
		</div>
			
	)
}