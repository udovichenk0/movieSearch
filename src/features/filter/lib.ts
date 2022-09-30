export const validNumber = (value: number, min: number, max: number, values:number[]) => {
		if(value > max) return max
		if(value < min) return min
		return value
}