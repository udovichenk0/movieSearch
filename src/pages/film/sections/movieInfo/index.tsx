import { useParams } from "react-router-dom"
import { useGetMovieByIdQuery } from "../../../../shared/api"
import { dateConverter, validValue } from "../../../../shared/lib"
import { InfoTable } from "../../../../shared/ui/AboutFilm/FactsAboutFilm"
import { Rating } from "../../../../shared/ui/Rating/Rating"
import { preload } from "../../lib"
import { ButtonWatch } from "../../ui"
import { ButtonStore } from "../../ui/Button/ButtonStore"
import style from './styles.module.scss'
export const MovieInfo = () => {
	const {id} = useParams<string>()
	const {data, isLoading} = useGetMovieByIdQuery(id)
	const {name,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster
	}= {...data}
	const items = [
		{leftItem: 'Страны', rightItem: countries?.map((action:{name: string}) => action.name).join(', ')},
		{leftItem: 'Жанр', rightItem: genres?.map((action:any) => action.name).join(', ')},
		{leftItem: 'Слоган', rightItem: slogan || '—'},
		{leftItem: 'Возраст', rightItem: ageRating || '—'},
		{leftItem: 'Бюджет', rightItem: `${budget?.currency || ``} ${validValue(budget?.value)}`},
		{leftItem: 'Время', rightItem: `${movieLength} 	min`},
		{leftItem: 'Сборы в США', rightItem: `${fees?.usa?.currency || ''} ${validValue(fees?.usa?.value)}`},
		{leftItem: 'Сборы в мире', rightItem: `${fees?.world?.currency || ''} ${validValue(fees?.world?.value)}`},
		{leftItem: 'Премьера в мире', rightItem: dateConverter(premiere?.world)},
	]
	return (
		<section className={style.box__body}>
			<div className={style.body__poster}>
				<div className={style.image__container}>
					<img className={style.poster} src={poster?.url} alt="" />
				</div>
					<Rating ratingStyle={style.body__rating} rating={rating?.kp? rating.kp : 0}/>
			</div>
			<div className={style.body__info}>
				<h1 className={style.body__title}>{preload({isLoading,name})}</h1>
				<p className={style.body__secondTitle}>{preload({isLoading,alternativeName})}</p>
				<div className={style.body__buttons}>
					<ButtonWatch title={'Смотреть'}/>
					<ButtonStore title={'Буду смотреть'}/>
				</div>
					<InfoTable items={items}/>
			</div>
		</section>	
	)
}