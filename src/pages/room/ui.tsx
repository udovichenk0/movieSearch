import ReactPlayer from 'react-player/lazy'
import { useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../shared/api'



const RoomPlayer = () => {
	const {id} = useParams()
	const {data} = useGetMovieByIdQuery(id)
	console.log(data)
	return (
		<div>asdfsdfsadf</div>
	)
}


export default RoomPlayer