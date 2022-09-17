import { Dispatch, SetStateAction } from 'react'
import style from './showmore.module.scss'

type setLimitType = {
	setLimit: (prevState: number) => void
	limit: number
}
export const ShowMore = ({limit, setLimit}:setLimitType) => {
	function handleOnClick(){
		setLimit(limit + 3)
	}
	return (
		<div>
			<button onClick={() => handleOnClick()}>Паказать ещё</button>
		</div>
	)
}