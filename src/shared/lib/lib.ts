import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"

export const arountNumber = (number: number) => {
	return number.toFixed(1)
}

export const getPercent = ({total, value}:any) => {
	if(value == total) return
	const result = (value / total * 100)
	return (result.toFixed(2) + '%')
}
export function validValue(price: number | undefined) {
    return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
export const reviewColor = (type:any) => {
	switch(type){
		case 'Позитивный': return 'good__review'
		case 'Нейтральный': return 'neutral__review'
		case 'Негативный': return 'bad__review'
		default: return 'good__review'
	}
}

export const dateConverter = (data: string | undefined) => {
	if(!data) return '—'
	const date = new Date(data)
	const getMonth = date.toLocaleString('en', { month: 'long' })
	const getDay = date.getDate()
	const getYear = date.getFullYear()
	return (`${getDay} ${getMonth} ${getYear}`)
}



export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector