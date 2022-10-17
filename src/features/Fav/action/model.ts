import { useCallback } from "react"
import { viewerModel } from "@/Entities/viewer"


export const useToggleMovie = () => {
	const {favorites, setFavorite} = viewerModel.useMovieFavStatus()

	const handleToggle  = useCallback((movieId: number) => {
		if(favorites.includes(movieId)) setFavorite(favorites.filter((fav:any) => fav !== movieId))
		else setFavorite([...favorites, movieId])
	}, [favorites])

	return {handleToggle, favorites}
}

