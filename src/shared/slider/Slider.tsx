import swiper, { Navigation,  Pagination, Scrollbar, A11y, Lazy  } from 'swiper';
import './slider.scss'
// import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { RatingType } from '../../types/RatingType';
import { FilmType } from '../../types/FilmType';
type SwiperType = {
	name: string
	photo?: string
	poster: {
		previewUrl: string
		url: string
		_id: string
	}
	id: number
	rating: RatingType
}
type SwiperSliderType = {
	title: string
	content?: any
	redirect: string
  }

export const SwiperSlider = ({content, title, redirect}: SwiperSliderType) => {
	return <div className='wrapper'>
			<h1 className='title'>{title} <span>({content?.length})</span></h1>
		<Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={50}
	navigation={true}
	slidesPerGroup={3}
    scrollbar={{ draggable: true }}
	slidesPerView={2}
	className='slider'
	breakpoints={{
		1320: {
			slidesPerView: 5,
		},
		1050: {
			slidesPerView: 4,
			slidesPerGroup:2
		},
		800: {
			slidesPerView: 3,
			slidesPerGroup:1
		},
		700: {
			slidesPerView: 2,
			slidesPerGroup:1
		}
	}}
    >
	{content?.map(({name, photo, poster, id}:SwiperType, index: number) => {
		return <SwiperSlide className='swiper__body' key={index}>
			<div className={'card'}>
			<Link to={`/${redirect}/${id}`}><img className={'image'}  src={photo || poster?.url} alt="" /></Link>
			<div className={'name'}>{name}</div>
	</div></SwiperSlide>
	})}
    </Swiper>
	</div>
	
}