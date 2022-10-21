import { browser } from "@/shared/lib"

import { createSlice } from "@reduxjs/toolkit"
const storedAuth:string | null = localStorage.getItem('auth')
	let json
	if (typeof storedAuth === 'string') {
		json = JSON.parse(`${storedAuth}`)
	}
const authSlice = createSlice({
	name: 'authSlice',
	initialState: {
		email: json?.email || null,
		id: json?.uid || null
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