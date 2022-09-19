import { createSlice } from "@reduxjs/toolkit";

const showMoreSlice = createSlice({
	name: 'showMore',
	initialState: {
		filmLimit: 10,
		serialLimit: 10,
	},
	reducers: {
		showMoreFilms(state){
			state.filmLimit += 10
		}
	}
})

export const {showMoreFilms} = showMoreSlice.actions

export default showMoreSlice.reducer