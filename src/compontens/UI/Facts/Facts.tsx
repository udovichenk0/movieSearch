import style from './facts.module.scss'
export const Facts = ({facts}: any) => {
	return (
		<div >
			{facts.map((item: any, id: number) => <div className={style.fact} key={id}>— {item.value}</div>)}
		</div>
	)
}