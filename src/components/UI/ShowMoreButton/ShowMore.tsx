import { Dispatch, SetStateAction } from 'react'
import style from './showmore.module.scss'

type setLimitType = {
	setLimit: (prevState: string) => number
}
export const ShowMore = ({limit, setLimit}:any) => {
	console.log(setLimit)
	function handleOnClick(){
		setLimit(limit + 3)
	}
	return (
		<div>
			<button onClick={() => handleOnClick()}>Паказать ещё</button>
		</div>
	)
}