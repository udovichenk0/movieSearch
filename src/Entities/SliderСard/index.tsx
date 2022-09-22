import {  SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './styles.scss'
import "swiper/css";
export const SwiperCard = ({redirect,name,photo,poster,id}:any) => {
	return (
	<SwiperSlide className='swiper__body'>
		<div className={'card'}>
			<Link to={`/${redirect}/${id}`}><img className={'image'}  src={photo || poster?.url} alt="" /></Link>
			<div className={'name'}>{name}</div>
		</div>
	</SwiperSlide>
	)
}