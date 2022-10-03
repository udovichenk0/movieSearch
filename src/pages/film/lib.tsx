
import { Facts } from "@/shared/ui/Facts/Facts";
import { SwiperSlider } from "@/widgets/sliderBlock/Slider";
export const useActors = (persons:any) => {
	return persons?.filter((item:any) => {
	if (item.enProfession === 'actor' && item?.name?.length) {
		return item
	}
})
}

export const useInfo = ({description, actors, facts, style}:any) => {
	return [
		{title: 'Описание', content: <h2 className={style.description}>{description}</h2>, condition: description?.length},
		{title: 'Актёры', content:  <SwiperSlider content={actors} title={'Актёры'} redirect={'name'}/>, condition:actors?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
}
