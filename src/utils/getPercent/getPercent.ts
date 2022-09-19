export const getPercent = ({total, value}:any) => {
	if(value == total) return
	const result = (value / total * 100)
	return (result.toFixed(2) + '%')
}