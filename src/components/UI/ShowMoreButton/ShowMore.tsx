import { Dispatch, SetStateAction } from 'react'
import style from './showmore.module.scss'

export const ShowMore = ({setLimit}:any) => {
	return (
		<div>
			<button onClick={() => setLimit((prevState: number) => prevState + 3)}>Паказать ещё</button>
		</div>
	)
}