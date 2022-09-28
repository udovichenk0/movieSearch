import { useCallback } from "react"
import { useMovieFavStatus } from "../../../Entities/viewer/model/hooks"


export const useToggleMovie = () => {
	const {favorites, setFavorite} = useMovieFavStatus()

	const handleToggle  = useCallback((movieId: string) => {
		if(favorites.includes(movieId)) setFavorite(favorites.filter((fav:any) => fav !== movieId))
		else setFavorite([...favorites, movieId])
	}, [favorites])

	return {handleToggle, favorites}
}

