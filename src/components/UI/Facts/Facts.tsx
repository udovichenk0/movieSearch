import style from './facts.module.scss'
import ReactHtmlParser from 'react-html-parser';
import { FactsType } from '../../../types/FilmType';

export const Facts = ({facts}: {facts: FactsType}) => {
	return (
		<div >
			<div className={style.title}>Знаете ли вы, что…</div>
			{facts.map((item: any, id: number) => <div key={id} className={style.fact}>— { ReactHtmlParser(item.value) }</div>)}
		</div>
	)
}