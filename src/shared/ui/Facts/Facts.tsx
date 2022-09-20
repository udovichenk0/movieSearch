import style from './facts.module.scss'
import ReactHtmlParser from 'react-html-parser';
import { FactsType } from '../../../types/FactsType';

export const Facts = ({facts}: {facts: FactsType[] | undefined}) => {
	return (
		<div >
			<div className={style.title}>Знаете ли вы, что…</div>
			{facts?.map((item: FactsType, id: number) => <div key={id} className={style.fact}>— { ReactHtmlParser(item.value) }</div>)}
		</div>
	)
}