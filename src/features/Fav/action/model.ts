import { useCallback } from "react"
import { useMovieFavStatus } from "../../../Entities/viewer/model/hooks"
import { useGetMovieByIdQuery } from "../../../shared/api"


export const useToggleMovie = ({movieId}: any) => {
	const {favorites, setFavorite} = useMovieFavStatus()

	const handleToggle  = useCallback(() => {
		if(favorites.includes(movieId)) setFavorite(favorites.filter((fav:any) => fav !== movieId))
		else setFavorite([...favorites, movieId])
	}, [favorites])

	return {handleToggle}
}

