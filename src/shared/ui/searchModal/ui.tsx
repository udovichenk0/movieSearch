import { PropsWithChildren } from "react";
import style from './styles.module.scss'
export const SearchModal = ({children}: PropsWithChildren ) => {
	return (
		<div className={style.dropdown}>
			{children}
		</div>
	)
}