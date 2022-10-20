
import { Facts } from "@/shared/ui/Facts/Facts";
import { FactsType } from "@/types/FactsType";
import { SwiperSlider } from "@/widgets/sliderBlock/Slider";
type personsType = {
	enName: string
	enProfession:string
	id: number
	name: string
	photo: URL
}
export const useActors = (persons: any) => {
	return persons?.filter((item:{name:string, enProfession:string}) => {
	if (item.enProfession === 'actor' && item?.name?.length) {
		return item
	}
})
}

type useInfoType = {
	description?: string
	actors: personsType[]
	facts?: FactsType[]
	style: any
}
export const useInfo = ({description, actors, facts, style}:useInfoType) => {
	return [
		{title: 'Описание', content: <h2 className={style.description}>{description}</h2>, condition: description?.length},
		{title: 'Актёры', content:  <SwiperSlider content={actors} title={'Актёры'} redirect={'name'}/>, condition:actors?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
}
