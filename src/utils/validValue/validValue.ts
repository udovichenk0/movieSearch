export const validValue = (value: number) => {
	return String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')	
}