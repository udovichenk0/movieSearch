import classnames from 'classnames'
import style from './review.module.scss'
export const Review = () => {
	return (
		<div>
			<div className={style.title}>Рецензии кинокритиков</div>
			<div className={classnames(style.main_block, 'main')}>
				<div className={style.main__reviews}>
					<div className={style.main__review}>
						<div className={style.main__top}>
							<div className={style.main__name}>Я - возмездие.</div>
							<div className={style.main__comments}>
								<p className={style.main__comment}>Только вышел с сеанса.</p>
								<p className={style.main__comment}>Ну очень интересная работа.</p>
								<p className={style.main__comment}>Начну с моментов, который мне хочется описать и поговорить об.</p>
							</div>
						
						<button className={style.main__button}>показать всю рецензию</button>
						</div>
						<div className={style.main__bottom}>
							<div className={style.main__container}>
								<div className={style.main__data}>2 марта 2022</div>
								<div className={style.main__estimates}>
									<div className={style.main__like}>Like</div>
									<div className={style.main__dislike}>Dislike</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className={style.statistics}>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__allNumbers}>132</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__likedNumber}>132</div>
							<div className={style.votes__precent}>100.00%</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__dislidedNumber}>0</div>
							<div className={style.votes__precent}>0.00%</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
					<div className={style.review__statistic}>
						<div className={style.votes}>
							<div className={style.votes__neutralNumber}>0</div>
							<div className={style.votes__precent}>0.00%</div>
						</div>
						<p className={style.undertext}>Всего</p>
					</div>
				</div>
			</div>
		</div>
	)
}