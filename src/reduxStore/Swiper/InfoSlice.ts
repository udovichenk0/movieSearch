import { createSlice } from '@reduxjs/toolkit'
const state ={
	movies: [] ,
	person: [],
	isFetching: true,
}
const HeroSlice = createSlice({
	name: 'heroSlice',
	initialState: state,
	reducers: {
		setMovies(state, action){
			state.isFetching = false
			state.movies = action.payload
		},
		setPerson(state, action){
			state.isFetching = false
			state.person = action.payload
		},
	}
})

export const {setMovies, setPerson} = HeroSlice.actions
export default HeroSlice.reducer


