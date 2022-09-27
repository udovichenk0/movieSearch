import { browser } from "../../../shared/lib/browser"

export const useMovieFavStatus = () => {
	const [favorites, setFavorite] = browser.useLocalStorage('favorite', [1,2,3])

	return {favorites, setFavorite}
}