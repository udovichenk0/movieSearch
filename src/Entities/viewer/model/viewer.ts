import { browser } from "../../../shared/lib"

import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
	name: 'authSlice',
	initialState: {
		email: null,
		id: null
	},
	reducers:{
		loginUser(state, action){
			state.email = action.payload.email
			state.id = action.payload.uid
		},
		logOutUser(state){
			state.email = null
			state.id = null
		}
	}
})

export const {loginUser, logOutUser} = authSlice.actions

export default authSlice.reducer

export const useMovieFavStatus = () => {
	const [favorites, setFavorite] = browser.useLocalStorage<number[]>('favorite', [])

	return {favorites, setFavorite}
}