import { useNavigate } from "react-router-dom"
import { Container } from "../../common/containerStyle/container"
import { InfoTable } from "../../compontens/film/components/AboutFilm/FactsAboutFilm"
import { ButtonStore } from "../../compontens/film/components/Button/ButtonStore"
import { ButtonWatch } from "../../compontens/film/components/ButtonWatch/ButtonWatch"
import { FooterTabs } from "../../compontens/film/components/Tabs/FooterTabs"
import style from './info.module.scss'
export const Info = ({actors,items,filmInfo}:any) => {
	const navigate = useNavigate()
	
	return (
		<div className={style.wrapper}>
			<Container>
			<section className={style.section__body}>
				<button className={style.buttonBack} onClick={() => navigate(-1)}>Назад</button>
				<div className={style.box__body}>
					<div className={style.body__poster}>
						<img className={style.poster} src={filmInfo.poster.url} alt="" />
						<div className={style.body__rating}>{filmInfo.rating.kp}</div>
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{filmInfo.name}</h1>
						<p className={style.body__secondTitle}>{filmInfo.alternativeName}</p>
						<div className={style.body__buttons}>
							<ButtonWatch title={'Смотреть'}/>
							<ButtonStore title={'Буду смотреть'}> </ButtonStore>
						</div>
						<div className="info">
							<InfoTable items={items}/>
						</div>
					</div>
				</div>	
			<FooterTabs description={filmInfo.description} actors={actors}/>
			</section>
		</Container>
		</div>	
	)
} 