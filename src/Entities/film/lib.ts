import { MovieType } from "../../types/MovieType"

export const useVotes = (data:{docs: MovieType[]}, total:number) => {
	const goodReview = <number>data?.docs?.filter((item:MovieType) => !item.type || item.type === 'Позитивный').length
	const badReview = <number>data?.docs?.filter((item:MovieType) =>  item.type === 'Негативный').length
	const neutralReview = <number>data?.docs?.filter((item:MovieType) =>  item.type === 'Нейтральный').length


return [
	{value: goodReview, style: 'goodReview'},
	{value: badReview, style: 'badReview'},
	{value: neutralReview, style: 'neutralReview'},
	{value: total, style: 'allReview'},
]
}