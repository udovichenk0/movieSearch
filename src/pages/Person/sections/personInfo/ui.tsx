

import { InfoTable } from '../../../../shared/ui'
import style from './styles.module.scss'
export const PersonInfo = ({photo, actorEnName, actorName,items}:any) => {
	return <section className={style.box__body}>
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
			</section>	
}