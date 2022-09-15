import style from './facts.module.scss'
import ReactHtmlParser from 'react-html-parser';

export const Facts = ({facts}: any) => {
	return (
		<div >
			<div className={style.title}>Знаете ли вы, что…</div>
			{facts.map((item: any, id: number) => <div key={id} className={style.fact}>— { ReactHtmlParser(item.value) }</div>)}
		</div>
	)
}