import { MovieType } from "../../types/MovieType"

export const useVotes = (data:any, total:any) => {
	const goodReview = data?.docs?.filter((item:MovieType) => !item.type || item.type === 'Позитивный').length
	const badReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Негативный').length
	const neutralReview = data?.docs?.filter((item:MovieType) =>  item.type === 'Нейтральный').length

// 	return {
// 		positive: {vote: goodReview, style: 'goodReview'},
// 		negative: {vote: badReview, style: 'badReview'},
// 		neutral: 
// }
return [
	{value: goodReview, style: 'goodReview'},
	{value: badReview, style: 'badReview'},
	{value: neutralReview, style: 'neutralReview'},
	{value: total, style: 'allReview'},
]
}