export const validValue = (value: number | undefined | string) => {
	return String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')	
}