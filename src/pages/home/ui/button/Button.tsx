import style from './button.module.scss'

interface ButtonInterface{
	title: string,
	icon: any,
	
}

export const Button = ({title, icon, onClick}: any) => {
	return (
		<button onClick={onClick} className={style.button} >
			{title}
			<div className={style.icon}>
				{icon}
			</div>
		</button>
	)
}