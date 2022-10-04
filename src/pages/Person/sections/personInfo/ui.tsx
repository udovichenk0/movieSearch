import { InfoTable } from '@/shared/ui/AboutFilm'
import style from './styles.module.scss'


export const PersonInfo = ({photo, enName, name,items}:any) => {
	return <section className={style.box__body}>
				<div className={style.body__poster}>
					<img className={style.poster} src={photo} alt={`${name}`} />
				</div>
				<div className={style.body__info}>
					<h1 className={style.body__title}>{name}</h1>
					<p className={style.body__secondTitle}>{enName}</p>
					<div className="info">
						<InfoTable items={items}/>
					</div>
				</div>
			</section>	
}