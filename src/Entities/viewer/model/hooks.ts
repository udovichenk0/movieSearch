import { browser } from "../../../shared/lib"

export const useMovieFavStatus = () => {
	const [favorites, setFavorite] = browser.useLocalStorage<string[]>('favorite', [])

	return {favorites, setFavorite}
}