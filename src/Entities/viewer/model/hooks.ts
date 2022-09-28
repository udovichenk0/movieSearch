import { browser } from "../../../shared/lib/browser"

export const useMovieFavStatus = () => {
	const [favorites, setFavorite] = browser.useLocalStorage<string[]>('favorite', [])

	return {favorites, setFavorite}
}