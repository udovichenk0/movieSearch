// import { useParams } from "react-router-dom"
// import { useGetMovieByIdQuery } from "../../../../shared/api"
import { ButtonStore } from "../../../../features/Fav/action/ui/ui"
import { dateConverter, preload, validValue } from "../../../../shared/lib"
import { InfoTable,Rating } from "../../../../shared/ui"
import { ButtonWatch } from "../../ui"
import style from './styles.module.scss'
export const MovieInfo = ({isLoading,name,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster}:any) => {
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