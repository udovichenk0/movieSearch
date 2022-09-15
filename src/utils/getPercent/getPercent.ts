export const getPercent = ({total, value}:any) => {
	const result = (value / total * 100)
	return (result.toFixed(2) + '%')
}