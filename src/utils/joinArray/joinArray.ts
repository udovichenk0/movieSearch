import { dateConverter } from "../stringToDate/dateConverter"
import { validValue } from "../validValue/validValue"
export const joinArray = (data: any) => {
	if(typeof data === 'string') return data
	else if(data.items === null) return '—'
	else if(data.value) return `${data.currency} ${data.value}`
	else if(typeof data === 'number') return data + ' мин'
	else if(typeof data?.world === 'string') return dateConverter(data.world)
	else if(data.usa) return `${data.usa.currency} ${validValue(data.usa.value)}`
	else if(data.world) return `${data.world.currency} ${validValue(data.world.value)}`
	return data.map((action:any) => action.name).join(', ')
}