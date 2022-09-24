import { createSlice } from "@reduxjs/toolkit";

const showMoreSlice = createSlice({
	name: 'model/showMore',
	initialState: {
		filmLimit: 10,
		serialLimit: 10,
	},
	reducers: {
		showMoreFilms(state){
			state.filmLimit += 10
		},
		showMoreSerial(state){
			state.serialLimit += 10
		}
	}
})

export const {showMoreFilms, showMoreSerial} = showMoreSlice.actions

export default showMoreSlice.reducer