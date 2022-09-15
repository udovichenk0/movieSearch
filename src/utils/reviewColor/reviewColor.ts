export const reviewColor = (type:any) => {
	switch(type){
		case 'Позитивный': return 'good__review'
		case 'Нейтральный': return 'neutral__review'
		case 'Негативный': return 'bad__review'
		default: return 'good__review'
	}
}